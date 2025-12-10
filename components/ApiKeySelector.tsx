import React, { useEffect, useState } from 'react';

interface ApiKeySelectorProps {
  onKeySelected: () => void;
}

const ApiKeySelector: React.FC<ApiKeySelectorProps> = ({ onKeySelected }) => {
  const [hasKey, setHasKey] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    const win = window as any;
    if (win.aistudio) {
      const selected = await win.aistudio.hasSelectedApiKey();
      setHasKey(selected);
      if (selected) {
        onKeySelected();
      }
    } else if (process.env.API_KEY) {
        setHasKey(true);
        onKeySelected();
    }
    setLoading(false);
  };

  const handleSelectKey = async () => {
    const win = window as any;
    if (win.aistudio) {
      await win.aistudio.openSelectKey();
      // Assume success as per instructions
      setHasKey(true);
      onKeySelected();
    }
  };

  if (loading || hasKey) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 font-sans text-gray-900">Enable AI Experience</h2>
        <p className="mb-6 text-gray-600">
          To interact with the AI assistant and experience the full portfolio, please select a Google Cloud API Key.
        </p>
        <button
          onClick={handleSelectKey}
          className="bg-brand-600 hover:bg-brand-900 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full shadow-lg"
        >
          Select API Key
        </button>
        <p className="mt-4 text-xs text-gray-400">
          This uses the Gemini API. <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-brand-600">Billing info</a>.
        </p>
      </div>
    </div>
  );
};

export default ApiKeySelector;