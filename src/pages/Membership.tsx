import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Shield, Users, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Single",
    price: "$199",
    period: "/month",
    description: "Perfect for individuals seeking exclusive experiences",
    features: [
      "Access to all club events",
      "Member directory access",
      "Private messaging with members",
      "Monthly exclusive newsletter",
      "Limited guest privileges",
      "Event photo access",
      "Member support 24/7"
    ]
  },
  {
    name: "Couple",
    price: "$299",
    period: "/month",
    description: "Designed for couples exploring together",
    features: [
      "All Single membership benefits",
      "Two linked membership profiles",
      "Priority event booking",
      "Unlimited guest privileges",
      "Exclusive couple-focused events",
      "Couple's lounge access",
      "Relationship resources",
      "Anniversary celebration perks"
    ],
    popular: true
  },
  {
    name: "VIP",
    price: "$499",
    period: "/month",
    description: "The ultimate premium lifestyle experience",
    features: [
      "All Couple membership benefits",
      "Priority access to all events",
      "Private event hosting capabilities",
      "Personal concierge service",
      "Access to partner clubs network",
      "Annual VIP gala invitation",
      "Exclusive VIP lounge access",
      "Custom event planning assistance",
      "Premium gift packages"
    ]
  }
];

const faqs = [
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. We take privacy extremely seriously. All member information is encrypted and stored securely. Your data will never be shared with third parties, and discretion is our top priority."
  },
  {
    question: "What is the age requirement?",
    answer: "All members must be 18 years of age or older. Age verification is required during the application process to ensure compliance."
  },
  {
    question: "How does the application process work?",
    answer: "After submitting your membership application with payment, our team reviews each application individually. This typically takes 24-48 hours. We review applications to ensure community fit and maintain our club standards."
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, memberships can be cancelled at any time with 30 days notice. Simply contact our support team, and we'll process your cancellation request promptly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and use secure, encrypted payment processing. Your billing will appear discreetly on your statement."
  },
  {
    question: "Are there any additional fees?",
    answer: "No hidden fees. Your membership covers access to regular club events. Some special premium events may have optional ticket fees, which are clearly communicated in advance."
  }
];

const Membership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text mb-6">
              Become a Member
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join Calgary's most exclusive lifestyle club. Our private application review 
              process ensures a safe, sophisticated community of like-minded individuals.
            </p>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-xl relative ${
                    plan.popular ? "ring-2 ring-primary shadow-glow scale-105" : ""
                  } hover:scale-105 transition-all duration-300 animate-scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary px-6 py-2 rounded-full text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="font-display text-3xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
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

                  <Button
                    className={`w-full h-12 text-base ${
                      plan.popular
                        ? "bg-gradient-primary text-primary-foreground hover:shadow-glow"
                        : "border-primary/50"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Apply for {plan.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-center gradient-text mb-16">
              Why Choose Clubhouse Pandora?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">Safe & Secure</h3>
                <p className="text-muted-foreground">
                  Verified members, secure facilities, and strict privacy policies
                </p>
              </div>
              <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">Exclusive Community</h3>
                <p className="text-muted-foreground">
                  Connect with sophisticated, like-minded individuals and couples
                </p>
              </div>
              <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">Premium Experiences</h3>
                <p className="text-muted-foreground">
                  Curated events and unforgettable moments in elegant venues
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-center gradient-text mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card px-6 rounded-lg border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Terms Notice */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              By applying for membership, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>,{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>, and{" "}
              <a href="#" className="text-primary hover:underline">Code of Conduct</a>.
              All applicants must be 18 years or older and pass our verification process.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
