
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email') as string;
      
      // Store user info in localStorage (in a real app, you'd have a token from a backend)
      localStorage.setItem('user', JSON.stringify({ 
        email,
        name: email.split('@')[0],
        isAuthenticated: true 
      }));
      
      toast.success('Successfully signed in!');
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Form validation
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      setIsLoading(false);
      return;
    }
    
    // Simulate registration
    setTimeout(() => {
      // Store user info in localStorage (in a real app, you'd have a token from a backend)
      localStorage.setItem('user', JSON.stringify({ 
        email,
        name: email.split('@')[0],
        isAuthenticated: true 
      }));
      
      toast.success('Registration successful!');
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold">Welcome to Asha AI</h1>
            <p className="text-muted-foreground mt-2">Your AI career assistant for women</p>
          </div>
          
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-asha-purple hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me for 30 days
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-asha-purple hover:bg-asha-purple/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input id="register-email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input id="register-password" name="password" type="password" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" name="confirmPassword" type="password" required />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the <a href="#" className="text-asha-purple hover:underline">Terms of Service</a> and{' '}
                      <a href="#" className="text-asha-purple hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-asha-purple hover:bg-asha-purple/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
