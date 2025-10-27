const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
            Welcome to the Club
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Clubhouse Pandora is an exclusive, members-only lifestyle and social club designed 
            for adults 18+ who value connection, discretion, and unforgettable experiences.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our goal is to provide a private, inclusive, and sophisticated community where 
            individuals and couples can meet, explore, and celebrate freedom in a safe, 
            respectful environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="glass-card p-6 rounded-lg hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-display text-xl font-semibold mb-2">Private</h3>
              <p className="text-sm text-muted-foreground">
                Your discretion is our priority with confidential membership
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-display text-xl font-semibold mb-2">Inclusive</h3>
              <p className="text-sm text-muted-foreground">
                A welcoming community for all adults seeking connection
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-display text-xl font-semibold mb-2">Sophisticated</h3>
              <p className="text-sm text-muted-foreground">
                Premium experiences in an elegant, upscale environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
