
export const TypingIndicator = () => {
  return (
    <div className="flex items-start mb-4 animate-fade-in">
      <div className="max-w-[80%]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-asha-purple to-asha-magenta flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-xs font-medium">Asha AI</span>
        </div>
        
        <div className="px-4 py-3 rounded-2xl bg-muted text-foreground rounded-tl-none inline-block">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
