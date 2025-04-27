
interface QuickRepliesProps {
  onSelect: (reply: string) => void;
}

export const QuickReplies = ({ onSelect }: QuickRepliesProps) => {
  const suggestions = [
    "Find job opportunities",
    "Upcoming events",
    "Mentorship programs",
    "Career advice",
    "Resume tips"
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-3 overflow-x-auto pb-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          className="px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-asha-purple/10 hover:text-asha-purple transition-colors whitespace-nowrap"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};
