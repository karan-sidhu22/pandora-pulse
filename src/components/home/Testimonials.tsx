import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "An incredibly welcoming and discreet community. The events are always elegant and well-organized.",
    author: "Anonymous Member"
  },
  {
    text: "Finally found a space where I can be myself without judgment. The staff and members are respectful and professional.",
    author: "VIP Member"
  },
  {
    text: "The level of privacy and security here is unmatched. I feel safe and valued as a member.",
    author: "Couple Member"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by hundreds of discerning members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          <div className="glass-card px-6 py-3 rounded-full flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium">18+ Only</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium">Confidential Membership</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium">Secure Billing</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium">Verified Members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
