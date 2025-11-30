import React, { useState, useRef, useEffect } from 'react';
import { Send, Scroll, Sparkles, User, Loader2 } from 'lucide-react';
import { streamAskTheScribe } from '../services/gemini';
import { Message, Language } from '../types';

interface OracleChatProps {
  lang: Language;
}

const OracleChat: React.FC<OracleChatProps> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language changes or on mount
  useEffect(() => {
    const welcomeText = lang === 'ar' 
      ? 'أهلاً بك يا بني في أرض النيل العظيم. أنا إمحوتب، حكيم وكاتب الفراعنة. اسألني عما يحيرك بخصوص تاريخنا العظيم، الأهرامات، أو أسرار الآلهة.'
      : 'Welcome, my child, to the land of the great Nile. I am Imhotep, scribe and sage of the Pharaohs. Ask me what puzzles you about our great history, the pyramids, or the secrets of the gods.';
    
    setMessages([{
      id: 'welcome',
      role: 'model',
      text: welcomeText,
      timestamp: new Date()
    }]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    // Create a placeholder for the model response
    const modelMessageId = (Date.now() + 1).toString();
    const modelMessage: Message = {
      id: modelMessageId,
      role: 'model',
      text: '',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, modelMessage]);

    try {
      const stream = streamAskTheScribe(input, history, lang);
      
      for await (const chunk of stream) {
        setMessages(prev => prev.map(msg => 
          msg.id === modelMessageId 
            ? { ...msg, text: msg.text + chunk }
            : msg
        ));
      }
    } catch (error) {
      console.error("Stream error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-xl border-2 border-egypt-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-egypt-blue to-slate-900 p-4 border-b border-egypt-gold flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-egypt-gold rounded-full text-egypt-blue">
            <Scroll size={24} />
          </div>
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold text-egypt-gold font-serif">
              {lang === 'ar' ? 'حكمة إمحوتب' : "Imhotep's Wisdom"}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'ar' ? 'الذكاء الاصطناعي الفرعوني' : 'Pharaonic AI'}
            </p>
          </div>
        </div>
        <Sparkles className="text-egypt-gold animate-pulse" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-cover bg-center" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")'}}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-4 ${msg.role === 'user' ? (lang === 'ar' ? 'flex-row-reverse' : 'flex-row-reverse') : (lang === 'ar' ? '' : '')}`}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${msg.role === 'user' ? 'bg-egypt-lapis border-blue-400' : 'bg-egypt-gold border-yellow-200'}`}>
              {msg.role === 'user' ? <User size={20} className="text-white" /> : <Scroll size={20} className="text-egypt-blue" />}
            </div>
            
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-lg leading-relaxed text-lg ${
              msg.role === 'user' 
                ? 'bg-egypt-lapis text-white rounded-br-none' 
                : 'bg-egypt-papyrus text-slate-900 rounded-bl-none border border-egypt-gold'
            }`}>
              <div className="whitespace-pre-wrap font-serif">
                {msg.text || (isLoading && msg.role === 'model' && msg.id === messages[messages.length-1].id ? <span className="animate-pulse">...</span> : '')}
              </div>
              <div className={`text-xs mt-2 opacity-60 ${msg.role === 'user' ? 'text-blue-200' : 'text-slate-600'}`}>
                {msg.timestamp.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', {hour: '2-digit', minute: '2-digit'})}
              </div>
            </div>
          </div>
        ))}
        {/* Loading Indicator for initial connection */}
        {isLoading && messages[messages.length-1]?.role === 'user' && (
          <div className="flex items-start gap-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="w-10 h-10 rounded-full bg-egypt-gold flex items-center justify-center shrink-0 animate-pulse">
              <Scroll size={20} className="text-egypt-blue" />
            </div>
            <div className="bg-egypt-papyrus p-4 rounded-2xl rounded-bl-none border border-egypt-gold flex items-center gap-2">
              <Loader2 className="animate-spin text-egypt-darkGold" size={20} />
              <span className="text-slate-700 font-serif">
                {lang === 'ar' ? 'إمحوتب يفك رموز البردية...' : 'Imhotep is deciphering the papyrus...'}
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-900 border-t border-egypt-gold" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={lang === 'ar' ? "اسأل إمحوتب عن تاريخ أجدادك..." : "Ask Imhotep about history..."}
            className="w-full bg-slate-800 text-white placeholder-slate-400 border border-slate-600 rounded-full py-4 px-6 focus:outline-none focus:border-egypt-gold focus:ring-1 focus:ring-egypt-gold transition-all font-serif"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className={`absolute ${lang === 'ar' ? 'left-2' : 'right-2'} p-3 bg-egypt-gold text-egypt-blue rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;
