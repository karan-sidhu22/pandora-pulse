import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import MembershipPreview from "@/components/home/MembershipPreview";
import EventsPreview from "@/components/home/EventsPreview";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <MembershipPreview />
        <EventsPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
