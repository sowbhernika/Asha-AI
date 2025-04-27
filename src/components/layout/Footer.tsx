
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-asha-background border-t border-border/40 py-12">
      <div className="asha-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-asha-purple to-asha-magenta flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-display font-semibold text-xl text-foreground">Asha AI</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering women in their professional journeys with AI-driven career guidance and opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/chat" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Chat with Asha</Link></li>
              <li><Link to="/jobs" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Career Opportunities</Link></li>
              <li><Link to="/events" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Events & Workshops</Link></li>
              <li><Link to="/mentorship" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Mentorship Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Resource Library</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Career Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Partner Network</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">JobsForHer Foundation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-asha-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JobsForHer Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
