import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury club interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8 animate-fade-in">
        <div className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-primary mb-4">
          21+ Members Only
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
          Experience Indiana's <br />
          <span className="gradient-text">Premier Lifestyle Club</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
          Where discretion meets connection
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link to="/membership">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow min-w-[200px] h-12 text-lg animate-glow-pulse">
              Join Now
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 min-w-[200px] h-12 text-lg">
              Member Login
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground pt-4">
          Exclusive. Safe. Unforgettable.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
