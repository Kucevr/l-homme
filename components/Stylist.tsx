
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { Icons } from "./ui";

interface Message {
  role: "user" | "model";
  text: string;
}

const QUICK_PROMPTS = [
  "Outfit for a first date",
  "Winter office essentials",
  "How to style chelsea boots?",
  "Weekend getaway look"
];

export const Stylist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: `You are a high-end menswear stylist for L'HOMME. Be concise, sophisticated, and helpful. Suggest items from the collection (Coats, Shirts, Boots, Knitwear). User asks: ${text}` }] }
        ],
      });
      
      const reply = response.text || "I apologize, I'm having trouble connecting to the styling service right now.";
      setMessages(prev => [...prev, { role: "model", text: reply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", text: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-30 bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Open AI Stylist"
      >
        <Icons.Sparkles />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-2 text-xs font-bold uppercase tracking-widest">
            AI Stylist
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-8 right-8 z-40 w-[90vw] md:w-[400px] h-[600px] bg-white shadow-2xl flex flex-col animate-fade-in border border-gray-100">
          <div className="p-4 border-b bg-black text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Icons.Sparkles />
                <div>
                    <h3 className="font-serif italic text-lg">L'Homme Stylist</h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">Powered by Gemini</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)}><Icons.X /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="text-center mt-12 opacity-50">
                <p className="font-serif italic text-xl mb-2">How can I help you today?</p>
                <p className="text-xs uppercase tracking-widest">Ask for advice on sizing, styling, or gifts.</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${msg.role === "user" ? "bg-black text-white" : "bg-white border border-gray-200 text-black"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400 animate-pulse text-center">Styling...</div>}
          </div>

          {/* Quick Prompts */}
          {messages.length === 0 && (
             <div className="p-4 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
                {QUICK_PROMPTS.map((prompt, idx) => (
                    <button 
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="text-[10px] font-bold uppercase tracking-widest border border-gray-200 px-3 py-2 hover:bg-black hover:text-white transition-colors"
                    >
                        {prompt}
                    </button>
                ))}
             </div>
          )}

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about styling..."
                className="flex-1 text-sm outline-none border-b border-gray-200 focus:border-black py-2 bg-transparent"
              />
              <button onClick={() => handleSend()} disabled={loading} className="hover:opacity-50"><Icons.Send /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
