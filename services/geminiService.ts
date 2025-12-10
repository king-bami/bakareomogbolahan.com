import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Removed singleton to ensure fresh client creation on each request with latest API Key

export const getGeminiResponse = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not available");
  }

  try {
    // Initialize client for each request to ensure we use the current API key
    const aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const chat = aiClient.chats.create({
      model: "gemini-1.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I encountered an error connecting to my brain. Please try again later.";
  }
};