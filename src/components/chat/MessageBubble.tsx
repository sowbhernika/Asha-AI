
import { Message } from './ChatContainer';
import { formatDistanceToNow } from 'date-fns';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === 'user';
  const formattedTime = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true });
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
        {!isUser && (
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-asha-purple to-asha-magenta flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="text-xs font-medium">Asha AI</span>
          </div>
        )}
        
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-asha-purple text-white rounded-tr-none'
              : 'bg-muted text-foreground rounded-tl-none'
          }`}
        >
          <p className="whitespace-pre-line">{message.text}</p>
        </div>
        
        <div className={`text-xs text-muted-foreground mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};
