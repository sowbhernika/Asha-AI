
import { Button } from '@/components/ui/button';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  postedDate: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="asha-card p-5 space-y-4">
      <div>
        <h3 className="font-medium text-lg">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="text-sm font-medium">{job.company}</span>
          <span className="text-muted-foreground text-sm">•</span>
          <span className="text-sm text-muted-foreground">{job.location}</span>
          <span className="text-muted-foreground text-sm">•</span>
          <span className="text-sm text-muted-foreground">{job.type}</span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {job.skills.slice(0, 4).map((skill, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-asha-softPurple text-asha-purple rounded-full">
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
            +{job.skills.length - 4} more
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-muted-foreground">Posted {job.postedDate}</span>
        <Button size="sm" className="bg-asha-purple hover:bg-asha-purple/90">Apply Now</Button>
      </div>
    </div>
  );
};
