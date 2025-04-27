
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatContainer } from '@/components/chat/ChatContainer';
import { JobCard, Job } from '@/components/cards/JobCard';
import { EventCard, Event } from '@/components/cards/EventCard';
import { MentorshipCard, MentorshipProgram } from '@/components/cards/MentorshipCard';
import { 
  featuredJobs, 
  upcomingEvents, 
  featuredMentorshipPrograms 
} from '@/lib/dummyData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-asha-background py-16 md:py-24">
          <div className="asha-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                  Your AI Assistant for <span className="asha-gradient-text">Career Growth</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Asha helps women access personalized career guidance, job opportunities, 
                  mentorship programs, and professional development resources - all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/chat">
                    <Button size="lg" className="w-full sm:w-auto bg-asha-purple hover:bg-asha-purple/90">
                      Start Chatting
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-asha-purple text-asha-purple hover:bg-asha-purple/10">
                    Explore Resources
                  </Button>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-white rounded-xl shadow-lg border border-border/40 p-4">
                  <ChatContainer />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="asha-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">How Asha Empowers Your Career</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Asha is designed to support women at every stage of their professional journey with personalized guidance and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Career Guidance",
                  description: "Get personalized advice on career paths, skill development, and professional growth strategies.",
                  icon: "🧭",
                  color: "bg-asha-yellow"
                },
                {
                  title: "Job Opportunities",
                  description: "Discover relevant job openings tailored to your skills, experience, and career aspirations.",
                  icon: "💼",
                  color: "bg-asha-green"
                },
                {
                  title: "Mentorship Programs",
                  description: "Connect with industry mentors who can provide guidance, feedback, and support.",
                  icon: "🤝",
                  color: "bg-asha-orange"
                },
                {
                  title: "Learning Resources",
                  description: "Access curated educational content, workshops, and events to enhance your skills.",
                  icon: "📚",
                  color: "bg-asha-pink"
                }
              ].map((feature, index) => (
                <div key={index} className="asha-card p-6 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Jobs Section */}
        <section className="py-16 bg-asha-background">
          <div className="asha-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">Featured Job Opportunities</h2>
              <Link to="/jobs" className="text-asha-purple hover:underline text-sm font-medium">
                View all jobs →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.slice(0, 3).map((job: Job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-16 bg-white">
          <div className="asha-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">Upcoming Events</h2>
              <Link to="/events" className="text-asha-purple hover:underline text-sm font-medium">
                View all events →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.slice(0, 2).map((event: Event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Mentorship Programs Section */}
        <section className="py-16 bg-asha-background">
          <div className="asha-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">Featured Mentorship Programs</h2>
              <Link to="/mentorship" className="text-asha-purple hover:underline text-sm font-medium">
                View all programs →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMentorshipPrograms.slice(0, 3).map((program: MentorshipProgram) => (
                <MentorshipCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-asha-purple to-asha-magenta text-white">
          <div className="asha-container text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Accelerate Your Career?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Start a conversation with Asha today and discover personalized career opportunities, mentorship programs, and resources tailored just for you.
            </p>
            <Link to="/chat">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Chat with Asha Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
