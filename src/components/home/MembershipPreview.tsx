import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Single",
    price: "$199",
    period: "/month",
    features: [
      "Access to all club events",
      "Member directory access",
      "Private messaging",
      "Monthly newsletter",
      "Guest privileges (limited)"
    ],
    popular: false
  },
  {
    name: "Couple",
    price: "$299",
    period: "/month",
    features: [
      "All Single benefits",
      "Two membership profiles",
      "Priority event booking",
      "Unlimited guest privileges",
      "Exclusive couple events"
    ],
    popular: true
  },
  {
    name: "VIP",
    price: "$499",
    period: "/month",
    features: [
      "All Couple benefits",
      "Priority access to all events",
      "Private event hosting",
      "Concierge service",
      "Partner club access",
      "Annual VIP gala invitation"
    ],
    popular: false
  }
];

const MembershipPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Choose Your Membership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-xl relative ${
                plan.popular ? "ring-2 ring-primary shadow-glow" : ""
              } hover:scale-105 transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/membership">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground hover:shadow-glow"
                      : "border-primary/50"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All memberships require application review to maintain our community standards
        </p>
      </div>
    </section>
  );
};

export default MembershipPreview;
