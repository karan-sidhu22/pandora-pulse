import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Lock } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const events = [
  {
    id: 1,
    title: "Saturday Social Mixer",
    date: "March 15, 2025",
    time: "8:00 PM - 1:00 AM",
    location: "Main Club Lounge",
    image: event1,
    category: "Social",
    attendees: 45,
    membersOnly: false,
    description: "Join us for an elegant evening of networking and connection with fellow members. Complimentary welcome drinks and hors d'oeuvres."
  },
  {
    id: 2,
    title: "VIP Lounge Experience",
    date: "March 22, 2025",
    time: "9:00 PM - 2:00 AM",
    location: "VIP Private Lounge",
    image: event2,
    category: "VIP",
    attendees: 25,
    membersOnly: true,
    description: "Exclusive access to our premium lounge with live DJ, premium bar service, and intimate atmosphere. VIP members only."
  },
  {
    id: 3,
    title: "Masquerade Ball",
    date: "March 29, 2025",
    time: "8:00 PM - 2:00 AM",
    location: "Grand Ballroom",
    image: event3,
    category: "Theme",
    attendees: 80,
    membersOnly: false,
    description: "Dress to impress in elegant masks and formal attire. Live entertainment, specialty cocktails, and unforgettable atmosphere."
  },
  {
    id: 4,
    title: "Couples Connect Night",
    date: "April 5, 2025",
    time: "7:30 PM - 12:00 AM",
    location: "Couples Lounge",
    image: event1,
    category: "Couples",
    attendees: 30,
    membersOnly: true,
    description: "An evening designed for couples to connect and explore in a comfortable, welcoming environment. Open bar and light refreshments."
  },
  {
    id: 5,
    title: "Spring Celebration Gala",
    date: "April 12, 2025",
    time: "8:00 PM - 1:00 AM",
    location: "Main Club Lounge",
    image: event2,
    category: "Special",
    attendees: 100,
    membersOnly: false,
    description: "Welcome spring with an elegant celebration featuring live music, gourmet catering, and champagne toast at midnight."
  },
  {
    id: 6,
    title: "New Member Orientation",
    date: "April 19, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Welcome Lounge",
    image: event3,
    category: "Orientation",
    attendees: 20,
    membersOnly: true,
    description: "Meet the team, tour our facilities, and connect with fellow new members. Perfect introduction to club culture and community."
  }
];

const categories = ["All", "Social", "VIP", "Theme", "Couples", "Special", "Orientation"];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text mb-6">
              Exclusive Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience curated social gatherings in elegant settings
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-gradient-primary" : "border-primary/50"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-hero" />
                    {event.membersOnly && (
                      <div className="absolute top-4 right-4 bg-primary/90 px-3 py-1 rounded-full flex items-center space-x-1">
                        <Lock className="h-3 w-3" />
                        <span className="text-xs font-semibold">Members Only</span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="font-display text-2xl font-semibold group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-foreground/70">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {event.date} • {event.time}
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-foreground/70">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.attendees} attending
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow">
                      {event.membersOnly ? "Members RSVP" : "RSVP Now"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-display text-4xl font-bold gradient-text">
                Want Access to Members-Only Events?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join Clubhouse Pandora today and unlock exclusive experiences
              </p>
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                Become a Member
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
