
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EventCard, Event } from '@/components/cards/EventCard';
import { upcomingEvents } from '@/lib/dummyData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const Events = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');
  
  // In a real app, this would use actual dates to filter
  const filteredEvents = upcomingEvents.filter((event) => {
    if (filter === 'all') return true;
    // For this demo, just split them up
    if (filter === 'upcoming') return upcomingEvents.indexOf(event) < 5;
    return upcomingEvents.indexOf(event) >= 5;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="asha-container">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold mb-3">Professional Events</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect, learn, and grow with events designed to support your career journey
            </p>
          </div>
          
          <Tabs defaultValue="upcoming" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="all" onClick={() => setFilter('all')}>All Events</TabsTrigger>
              <TabsTrigger value="upcoming" onClick={() => setFilter('upcoming')}>Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" onClick={() => setFilter('past')}>Past Events</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <h3 className="text-lg font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground mb-4">There are no events in this category right now.</p>
              <Button className="bg-asha-purple hover:bg-asha-purple/90">Back to All Events</Button>
            </div>
          )}
          
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold mb-6">Looking for more ways to grow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Host Your Own Event",
                  description: "Share your expertise and build your network by hosting a workshop or webinar.",
                  cta: "Learn More"
                },
                {
                  title: "Suggest an Event Topic",
                  description: "Let us know what topics would help advance your career goals.",
                  cta: "Submit Idea"
                },
                {
                  title: "Become a Speaker",
                  description: "Share your professional journey and inspire other women in tech.",
                  cta: "Apply Now"
                }
              ].map((card, index) => (
                <div key={index} className="asha-card p-6">
                  <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                  <Button variant="outline">{card.cta}</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
