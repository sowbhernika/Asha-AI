
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ResourceCard, Resource } from '@/components/cards/ResourceCard';
import { featuredResources } from '@/lib/dummyData';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Resources = () => {
  const [category, setCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const filteredResources = featuredResources.filter((resource) => {
    const matchesCategory = category === 'all' || resource.category === category;
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  const categories = ['all', ...Array.from(new Set(featuredResources.map(r => r.category)))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="asha-container">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold mb-3">Career Resources</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover tools, guides, and courses to help you advance in your professional journey
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <Tabs defaultValue="all" className="w-full max-w-md">
              <TabsList className="w-full">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    onClick={() => setCategory(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <h3 className="text-lg font-medium mb-2">No resources found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search term</p>
            </div>
          )}
          
          <div className="mt-16 p-6 border rounded-lg bg-gradient-to-r from-asha-purple/10 to-asha-magenta/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-medium mb-2">Can't find what you're looking for?</h2>
                <p className="text-muted-foreground">
                  Our AI assistant can help you find specific resources or answer your career questions.
                </p>
              </div>
              <Button className="md:self-end bg-asha-purple hover:bg-asha-purple/90">Ask Asha</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
