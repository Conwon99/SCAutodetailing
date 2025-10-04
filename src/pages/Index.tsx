import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Process from "@/components/Process";
import ServicesGrid from "@/components/ServicesGrid";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <TrustBar />
      <Process />
      <ServicesGrid />
      <Gallery />
      <Reviews />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
