import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

const PaintCorrection = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20paint%20correction%20service";
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Paint Correction in{" "}
                <span className="text-[hsl(var(--grass-green))]">Ayrshire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Remove scratches, swirls, and imperfections from your vehicle's paint surface with our professional paint correction service. We restore your paint to showroom condition.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 h-auto font-semibold rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button 
                onClick={handleQuoteClick}
                variant="outline"
                className="text-lg px-8 py-4 h-auto font-semibold rounded-full border-2"
              >
                Call 07961 817087
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <MapPin className="w-5 h-5 text-[hsl(var(--grass-green))]" />
              <span>Serving all of Ayrshire - We come to you</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Paint Correction */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                What is Paint Correction?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Paint correction is a professional process that removes surface imperfections from your vehicle's paintwork, including swirl marks, light scratches, oxidation, water spots, and other defects. This process uses specialized compounds and polishing techniques to restore your paint to its original condition.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike a simple wax or polish, paint correction actually removes a microscopic layer of clear coat to eliminate defects. Our skilled technicians use various grades of polishing compounds and pads to achieve different levels of correction, ensuring your vehicle's paint looks better than when it left the showroom.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Swirl Mark Removal</h3>
                  <p className="text-muted-foreground">Eliminates the fine circular scratches that make paint look dull and cloudy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Scratch Repair</h3>
                  <p className="text-muted-foreground">Removes light to moderate scratches that haven't penetrated the clear coat.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Oxidation Removal</h3>
                  <p className="text-muted-foreground">Restores faded and oxidized paint to its original vibrant color.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Paint Defects */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Common Paint Defects We Correct
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our paint correction service addresses various types of paint imperfections that can affect your vehicle's appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Swirl Marks</h3>
              <p className="text-muted-foreground">Fine circular scratches caused by improper washing or drying techniques.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Light Scratches</h3>
              <p className="text-muted-foreground">Surface scratches that haven't penetrated through the clear coat.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Water Spots</h3>
              <p className="text-muted-foreground">Mineral deposits left behind when water evaporates on the paint surface.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Oxidation</h3>
              <p className="text-muted-foreground">Faded, chalky appearance caused by UV damage and environmental exposure.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Holograms</h3>
              <p className="text-muted-foreground">Oil-canning effect caused by improper polishing techniques.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Buffer Trails</h3>
              <p className="text-muted-foreground">Marks left behind by improper machine polishing techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Paint Correction Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure optimal results and protect your vehicle's paint during the correction process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paint Assessment</h3>
              <p className="text-muted-foreground">Thorough inspection under different lighting conditions to identify all defects.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paint Decontamination</h3>
              <p className="text-muted-foreground">Remove embedded contaminants that could interfere with the correction process.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Correction Process</h3>
              <p className="text-muted-foreground">Use appropriate compounds and techniques to remove defects while preserving paint.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Final Polish</h3>
              <p className="text-muted-foreground">Final polishing to achieve maximum gloss and prepare surface for protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing for Paint Correction?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Ayrshire's trusted paint correction specialists with years of experience and professional-grade equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Equipment</h3>
              <p className="text-muted-foreground">We use professional-grade polishers, compounds, and pads for optimal results.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile Service</h3>
              <p className="text-muted-foreground">We come to your location across Ayrshire with all necessary equipment and power.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Technique</h3>
              <p className="text-muted-foreground">Our technicians are trained in proper paint correction techniques and safety protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Restore Your Paint to Showroom Condition
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our professional paint correction service. We serve all areas of Ayrshire including Kilmarnock, Irvine, Troon, Ayr, and Prestwick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 h-auto font-semibold rounded-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Quote
            </Button>
            <Button 
              onClick={handleQuoteClick}
              className="bg-[hsl(var(--grass-green))] hover:bg-[hsl(var(--grass-green))] hover:opacity-90 text-white text-lg px-8 py-4 h-auto font-semibold rounded-full"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PaintCorrection;
