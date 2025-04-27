
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  speakers: Array<{ name: string; role: string }>;
}

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="asha-card p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-block px-2 py-1 text-xs rounded-full bg-asha-yellow text-asha-dark mb-2">
            {event.type}
          </div>
          <h3 className="font-medium text-lg">{event.title}</h3>
        </div>
        <CalendarIcon className="text-asha-purple" size={20} />
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center text-sm">
          <span className="font-medium w-20">Date:</span>
          <span className="text-muted-foreground">{event.date}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="font-medium w-20">Time:</span>
          <span className="text-muted-foreground">{event.time}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="font-medium w-20">Location:</span>
          <span className="text-muted-foreground">{event.location}</span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
      
      {event.speakers.length > 0 && (
        <div>
          <span className="text-xs font-medium text-muted-foreground uppercase">Speakers</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                  {speaker.name.charAt(0)}
                </div>
                <span className="text-sm">{speaker.name}</span>
                {index < event.speakers.length - 1 && <span className="text-muted-foreground">•</span>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <Button size="sm" className="w-full bg-asha-purple hover:bg-asha-purple/90">Register Now</Button>
    </div>
  );
};
