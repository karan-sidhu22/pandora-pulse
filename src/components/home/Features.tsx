import { Wine, Lock, MessageCircle, Building, Crown } from "lucide-react";

const features = [
  {
    icon: Wine,
    title: "Exclusive Events & Parties",
    description: "Curated social experiences and themed events in premium venues"
  },
  {
    icon: Lock,
    title: "Discreet & Safe Environment",
    description: "Privacy-focused with secure verification and confidential membership"
  },
  {
    icon: MessageCircle,
    title: "Private Member Chat",
    description: "Connect with members through our secure communication platform"
  },
  {
    icon: Building,
    title: "Elegant Venue",
    description: "Modern, sophisticated space designed for comfort and style"
  },
  {
    icon: Crown,
    title: "VIP Membership Perks",
    description: "Priority access, special invitations, and exclusive benefits"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Why Join Clubhouse Pandora?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium benefits designed for discerning members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:shadow-glow transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
