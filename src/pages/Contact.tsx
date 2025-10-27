import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic will be implemented here
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! We'll get back to you within 24 hours.");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We're here to help. For membership inquiries, please visit our Membership page.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="glass-card p-8 md:p-12 rounded-2xl animate-scale-in">
                <h2 className="font-display text-3xl font-bold gradient-text mb-8">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-primary text-primary-foreground hover:shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div>
                  <h2 className="font-display text-3xl font-bold gradient-text mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. Our team typically responds within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl hover:shadow-glow transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Send us an email anytime
                        </p>
                        <a
                          href="mailto:info@clubhousepandora.com"
                          className="text-primary hover:underline text-sm"
                        >
                          info@clubhousepandora.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-xl hover:shadow-glow transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mon-Fri from 10am to 8pm MST
                        </p>
                        <a
                          href="tel:+14035551234"
                          className="text-primary hover:underline text-sm"
                        >
                          (403) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-xl hover:shadow-glow transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Visit us in Calgary
                        </p>
                        <p className="text-sm">
                          Calgary, Alberta<br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Business Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    For partnership opportunities, event bookings, or media inquiries, 
                    please use the contact form or email us directly at{" "}
                    <a href="mailto:partnerships@clubhousepandora.com" className="text-primary hover:underline">
                      partnerships@clubhousepandora.com
                    </a>
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl bg-primary/5 border-primary/20">
                  <p className="text-sm text-foreground/80">
                    <strong>Note:</strong> For membership-related questions, please visit our{" "}
                    <a href="/membership" className="text-primary hover:underline font-semibold">
                      Membership page
                    </a>{" "}
                    where you'll find detailed information and FAQs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
