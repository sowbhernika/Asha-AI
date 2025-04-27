import { useState, useRef, useEffect } from 'react';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { QuickReplies } from './QuickReplies';
import { TypingIndicator } from './TypingIndicator';
import { generateGeminiResponse } from '@/services/geminiService';
import { toast } from '@/components/ui/sonner';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi, I'm Asha! I'm here to help you with your career journey. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages only if user is near the bottom
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const threshold = 50; // px
    const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
    if (isAtBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Get response from Gemini API
      const messagesForAPI = messages.map(msg => ({
        text: msg.text,
        sender: msg.sender
      }));
      messagesForAPI.push({ text, sender: 'user' });
      
      const response = await generateGeminiResponse(messagesForAPI);
      
      // Add bot response
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting response:', error);
      toast.error('Failed to get a response. Please try again.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReplyClick = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[650px] max-h-[800px] bg-background border rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-asha-purple to-asha-magenta p-4">
        <h2 className="text-white font-display font-semibold">Chat with Asha</h2>
        <p className="text-white/80 text-sm">Your AI career assistant</p>
      </div>
      
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-border p-4">
        <QuickReplies onSelect={handleQuickReplyClick} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
