import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary-dark transition-colors flex items-center justify-center neon-border"
        >
          <MessageCircle size={24} />
        </button>
      )}
      
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] glassmorphism rounded-2xl flex flex-col neon-border">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle size={18} />
              </div>
              <h3 className="font-medium">AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div className="bg-surface rounded-lg p-3 max-w-[80%]">
                  <p>Hello! How can I help you with your engineering studies today?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-surface rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button className="w-10 h-10 rounded-lg bg-primary hover:bg-primary-dark transition-colors flex items-center justify-center">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;