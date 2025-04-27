
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, User, Menu, X, LogOut } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { toast } from '@/components/ui/sonner';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link to={to} className="px-3 py-2 text-sm font-medium rounded-md hover:bg-asha-purple/10 hover:text-asha-purple transition-colors">
    {children}
  </Link>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out");
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="asha-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-asha-purple to-asha-magenta flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground">Asha AI</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/mentorship">Mentorship</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Hello, </span>
                <span className="font-medium">{user.name}</span>
              </div>
              <Button variant="outline" size="sm" className="gap-1" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button variant="outline" size="sm" className="gap-1" onClick={handleLogin}>
              <User size={16} />
              <span>Sign In</span>
            </Button>
          )}
          <Link to="/chat">
            <Button size="sm" className="gap-1 bg-asha-purple hover:bg-asha-purple/90">
              <MessageCircle size={16} />
              <span>Start Chat</span>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 pb-4 bg-background border-b border-border/40 animate-fade-in">
          <nav className="flex flex-col space-y-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/chat">Chat</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/mentorship">Mentorship</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </nav>
          <div className="flex flex-col space-y-2 mt-4">
            {user ? (
              <>
                <div className="text-sm py-2">
                  <span className="text-muted-foreground">Hello, </span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <Button variant="outline" size="sm" className="gap-1 justify-center" onClick={handleLogout}>
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" className="gap-1 justify-center" onClick={handleLogin}>
                <User size={16} />
                <span>Sign In</span>
              </Button>
            )}
            <Link to="/chat">
              <Button size="sm" className="gap-1 justify-center w-full bg-asha-purple hover:bg-asha-purple/90">
                <MessageCircle size={16} />
                <span>Start Chat</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
