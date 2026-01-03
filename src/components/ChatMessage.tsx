import { Bot } from 'lucide-react';

interface ChatMessageProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'} mb-6`}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} max-w-[75%] sm:max-w-[65%]`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isBot
              ? 'bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] text-gray-800'
              : 'bg-white text-gray-800 shadow-sm border border-gray-100'
          }`}
        >
          <p className="leading-relaxed">{message.text}</p>
        </div>
        <span className="text-xs text-gray-400 mt-1 px-1">{message.timestamp}</span>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm text-gray-600">U</span>
        </div>
      )}
    </div>
  );
}
