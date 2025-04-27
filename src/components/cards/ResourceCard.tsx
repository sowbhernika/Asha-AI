
import { Button } from '@/components/ui/button';

export interface Resource {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  thumbnail?: string;
}

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="asha-card overflow-hidden flex flex-col">
      {resource.thumbnail && (
        <img 
          src={resource.thumbnail} 
          alt={resource.title} 
          className="w-full h-40 object-cover"
        />
      )}
      
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between items-start">
            <div className="inline-block px-2 py-1 text-xs rounded-full bg-asha-pink text-asha-dark mb-2">
              {resource.category}
            </div>
            <div className="text-xs text-muted-foreground uppercase">
              {resource.type}
            </div>
          </div>
          <h3 className="font-medium text-lg leading-tight">{resource.title}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground flex-1">{resource.description}</p>
        
        <Button 
          size="sm" 
          variant="outline" 
          className="w-full border-asha-purple text-asha-purple hover:bg-asha-purple/10"
        >
          View Resource
        </Button>
      </div>
    </div>
  );
};
