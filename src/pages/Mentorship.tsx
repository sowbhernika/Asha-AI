
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MentorshipCard, MentorshipProgram } from '@/components/cards/MentorshipCard';
import { featuredMentorshipPrograms } from '@/lib/dummyData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Mentorship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="asha-container">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold mb-3">Mentorship Programs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with experienced professionals who can guide your career journey
            </p>
          </div>
          
          <Tabs defaultValue="programs" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="mentors">Find a Mentor</TabsTrigger>
              <TabsTrigger value="become">Become a Mentor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="programs" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredMentorshipPrograms.map((program) => (
                  <MentorshipCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mentors" className="mt-6">
              <div className="text-center py-12 bg-muted/20 rounded-lg border">
                <h3 className="text-lg font-medium mb-3">Find Your Perfect Mentor</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Our mentor matching service helps you connect with experienced professionals in your field.
                </p>
                
                <div className="max-w-md mx-auto p-6 bg-card border rounded-lg">
                  <div className="space-y-4 text-left mb-6">
                    <h4 className="font-medium">What kind of mentor are you looking for?</h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {['Tech', 'Finance', 'Healthcare', 'Marketing', 'Leadership', 'Career Change'].map((category) => (
                        <div key={category} className="border rounded-md p-3 text-center cursor-pointer hover:border-asha-purple hover:bg-asha-purple/5 transition-colors">
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-asha-purple hover:bg-asha-purple/90">
                    Start Matching
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="become" className="mt-6">
              <div className="max-w-3xl mx-auto">
                <div className="asha-card p-8">
                  <h3 className="text-2xl font-medium mb-4">Share Your Expertise as a Mentor</h3>
                  <p className="text-muted-foreground mb-6">
                    Help shape the future of women in the workforce by sharing your knowledge and experience.
                    Becoming a mentor is a rewarding way to give back while strengthening your own leadership skills.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-medium mb-2">Benefits of Mentoring</h4>
                      <ul className="space-y-2">
                        {[
                          "Develop your leadership skills",
                          "Expand your professional network",
                          "Gain fresh perspectives",
                          "Make a difference in someone's career",
                          "Add to your professional credentials"
                        ].map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-asha-purple mr-2">•</span>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Time Commitment</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        You decide how much time you can dedicate. Most mentors spend 1-4 hours per month.
                        Programs range from 3-month commitments to ongoing relationships.
                      </p>
                      <h4 className="font-medium mb-2">Who Can Be a Mentor?</h4>
                      <p className="text-sm text-muted-foreground">
                        Professionals with 3+ years of experience in their field who want to help
                        others succeed in their career journey.
                      </p>
                    </div>
                  </div>
                  
                  <Button className="bg-asha-purple hover:bg-asha-purple/90">
                    Apply to Become a Mentor
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mentorship;
