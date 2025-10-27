import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const upcomingEvents = [
  {
    title: "Saturday Social Mixer",
    date: "March 15, 2025",
    image: event1,
    description: "Join us for an elegant evening of networking and connection"
  },
  {
    title: "VIP Lounge Experience",
    date: "March 22, 2025",
    image: event2,
    description: "Exclusive access to our premium lounge with live entertainment"
  },
  {
    title: "Themed Costume Gala",
    date: "March 29, 2025",
    image: event3,
    description: "Dress to impress at our monthly themed celebration"
  }
];

const EventsPreview = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience unforgettable moments at our curated events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-primary mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>
                <Button variant="outline" size="sm" className="w-full border-primary/50">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/events">
            <Button size="lg" className="bg-gradient-primary">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
