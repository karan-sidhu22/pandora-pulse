import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Crown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Login logic will be implemented here
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Signup logic will be implemented here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left Side - Image */}
            <div className="hidden lg:block">
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <img
                  src={heroBg}
                  alt="Clubhouse Pandora"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero flex flex-col justify-center items-center text-center p-8">
                  <Crown className="h-16 w-16 text-primary mb-6 animate-glow-pulse" />
                  <h2 className="font-display text-4xl font-bold gradient-text mb-4">
                    Welcome Back
                  </h2>
                  <p className="text-foreground/80 text-lg">
                    Access your exclusive membership portal
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="glass-card p-8 md:p-12 rounded-2xl animate-scale-in">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm cursor-pointer text-foreground/70"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-primary text-primary-foreground hover:shadow-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm Password</Label>
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required className="mt-1" />
                      <label
                        htmlFor="terms"
                        className="text-sm cursor-pointer text-foreground/70 leading-relaxed"
                      >
                        I am 18+ years old and agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-primary text-primary-foreground hover:shadow-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-8 p-4 glass-card rounded-lg">
                <p className="text-xs text-center text-muted-foreground">
                  🔒 Your privacy is our priority. All information is encrypted and kept strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
