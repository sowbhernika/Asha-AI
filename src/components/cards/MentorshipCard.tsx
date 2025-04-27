
import { Button } from '@/components/ui/button';

export interface MentorshipProgram {
  id: string;
  title: string;
  organization: string;
  duration: string;
  category: string;
  description: string;
  mentorCount: number;
  levelLabel: string;
}

interface MentorshipCardProps {
  program: MentorshipProgram;
}

export const MentorshipCard = ({ program }: MentorshipCardProps) => {
  return (
    <div className="asha-card p-5 space-y-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <div className="inline-block px-2 py-1 text-xs rounded-full bg-asha-green text-asha-dark mb-2">
            {program.category}
          </div>
          <h3 className="font-medium text-lg">{program.title}</h3>
          <p className="text-sm text-muted-foreground">{program.organization}</p>
        </div>
        <div className="inline-block px-3 py-1 text-xs rounded-full bg-muted">
          {program.levelLabel}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-center">
          <p className="text-sm font-medium">{program.duration}</p>
          <p className="text-xs text-muted-foreground">Duration</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">{program.mentorCount}+</p>
          <p className="text-xs text-muted-foreground">Mentors</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground line-clamp-3">{program.description}</p>
      
      <div className="flex gap-2 pt-2">
        <Button variant="outline" size="sm" className="flex-1 border-asha-purple text-asha-purple hover:bg-asha-purple/10">
          Learn More
        </Button>
        <Button size="sm" className="flex-1 bg-asha-purple hover:bg-asha-purple/90">
          Apply Now
        </Button>
      </div>
    </div>
  );
};
