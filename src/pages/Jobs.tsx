
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JobCard, Job } from '@/components/cards/JobCard';
import { featuredJobs } from '@/lib/dummyData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Search } from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(featuredJobs);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setFilteredJobs(featuredJobs);
      return;
    }
    
    const results = featuredJobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    setFilteredJobs(results);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="asha-container">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold mb-3">Job Opportunities</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover career opportunities from companies committed to supporting women's professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="border rounded-lg p-5 h-fit">
              <h2 className="font-medium text-lg mb-4">Filters</h2>
              
              <div className="space-y-6">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Input
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10"
                    />
                    <Button 
                      type="submit"
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-0 top-0"
                    >
                      <Search size={18} />
                    </Button>
                  </div>
                </form>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <label htmlFor={`type-${type}`} className="text-sm text-muted-foreground">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Experience Level</h3>
                  <div className="space-y-2">
                    {['Entry Level', 'Mid Level', 'Senior', 'Manager', 'Executive'].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={`level-${level}`} />
                        <label htmlFor={`level-${level}`} className="text-sm text-muted-foreground">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-asha-purple hover:bg-asha-purple/90">
                  Apply Filters
                </Button>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-medium text-lg">{filteredJobs.length} Jobs Found</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Most Recent</option>
                    <option>Most Relevant</option>
                    <option>Company Name</option>
                  </select>
                </div>
              </div>
              
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg bg-muted/20">
                  <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                  <p className="text-muted-foreground">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
