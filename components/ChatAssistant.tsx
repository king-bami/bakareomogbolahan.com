import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: ChatRole.MODEL,
      text: "Hi! I'm Omogbolahan's AI Assistant. Ask me anything about his experience, projects, or skills.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: ChatRole.USER,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for Gemini (map internal types to Gemini format)
    // We only take the last 10 messages to keep context efficient
    const history = messages.slice(-10).map(m => ({
        role: m.role === ChatRole.USER ? 'user' : 'model',
        parts: [{ text: m.text }]
    }));

    try {
      const responseText = await getGeminiResponse(userMsg.text, history);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: ChatRole.MODEL,
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: ChatRole.MODEL,
        text: "Sorry, I'm having trouble connecting to the server right now.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand-900 text-white rounded-full shadow-2xl hover:bg-gray-800 transition-colors flex items-center gap-2"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="hidden sm:inline font-medium text-sm">Ask AI Assistant</span>}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-900 p-4 flex items-center gap-3">
               <div className="p-2 bg-white/10 rounded-full">
                  <Sparkles size={20} className="text-yellow-300" />
               </div>
               <div>
                  <h3 className="text-white font-bold text-sm">Gbolahan's Assistant</h3>
                  <p className="text-brand-100 text-xs">Powered by Gemini 2.5 Flash</p>
               </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === ChatRole.USER
                        ? 'bg-brand-600 text-white rounded-tr-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm">
                        <Loader2 className="animate-spin text-brand-500" size={20} />
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-100 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my experience..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="text-brand-600 hover:text-brand-800 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-center mt-2">
                 <p className="text-[10px] text-gray-400">AI can make mistakes. Check resume for facts.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;