
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatContainer } from '@/components/chat/ChatContainer';
import { ResourceCard, Resource } from '@/components/cards/ResourceCard';
import { featuredResources } from '@/lib/dummyData';

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="asha-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <ChatContainer />
            </div>
            
            <div className="space-y-8">
              <div className="asha-card p-6">
                <h3 className="text-lg font-medium mb-4">Getting Started</h3>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Asha can help you with career guidance, job searches, mentorship opportunities, and more. Try asking:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Find jobs in marketing",
                      "What mentorship programs are available?",
                      "Upcoming tech networking events",
                      "Resume tips for career changers",
                      "Interview preparation advice"
                    ].map((suggestion, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span className="text-asha-purple mr-2">•</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Recommended Resources</h3>
                <div className="space-y-4">
                  {featuredResources.slice(0, 2).map((resource: Resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
