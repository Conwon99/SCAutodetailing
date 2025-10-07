import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle } from "lucide-react";

const PaintDecontamination = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20paint%20decontamination%20service";
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
                Paint Decontamination in{" "}
                <span className="text-[hsl(var(--grass-green))]">Ayrshire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Remove embedded contaminants and restore your vehicle's paint surface clarity with our professional paint decontamination service. We come to you across Ayrshire with all the equipment needed.
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

      {/* What is Paint Decontamination */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                What is Paint Decontamination?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Paint decontamination is a crucial step in automotive detailing that removes embedded contaminants from your vehicle's paint surface. Over time, your car's paint accumulates various pollutants including industrial fallout, tar, tree sap, brake dust, and road grime that become deeply embedded in the paint's clear coat.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These contaminants not only make your vehicle look dull and dirty, but they can also cause permanent damage if left untreated. Our professional decontamination process uses specialized clay bars, chemical decontaminants, and iron removers to safely extract these embedded particles without damaging your paint.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Safe for All Paint Types</h3>
                  <p className="text-muted-foreground">Our decontamination process is safe for all paint finishes including metallic, pearl, and matte finishes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Professional Equipment</h3>
                  <p className="text-muted-foreground">We use only professional-grade clay bars and chemical decontaminants for optimal results.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Time Efficient</h3>
                  <p className="text-muted-foreground">Complete decontamination service typically takes 2-4 hours depending on contamination level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Paint Decontamination Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure complete removal of all embedded contaminants from your vehicle's paint surface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Initial Assessment</h3>
              <p className="text-muted-foreground">We inspect your vehicle's paint condition and identify contaminated areas that need attention.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Chemical Decontamination</h3>
              <p className="text-muted-foreground">Apply iron remover to dissolve metallic particles and other chemical contaminants.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Clay Bar Treatment</h3>
              <p className="text-muted-foreground">Use professional clay bars to physically remove embedded contaminants from the paint surface.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Final Inspection</h3>
              <p className="text-muted-foreground">Thorough inspection to ensure all contaminants have been removed and paint surface is smooth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing for Paint Decontamination?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Ayrshire's trusted mobile detailing specialists with years of experience in paint decontamination and vehicle care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile Service</h3>
              <p className="text-muted-foreground">We come to your home or workplace across Ayrshire - no need to travel to us.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Equipment</h3>
              <p className="text-muted-foreground">We bring all necessary equipment including water tanks and power generators.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">All Vehicle Types</h3>
              <p className="text-muted-foreground">We service cars, vans, SUVs, and commercial vehicles of all sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Restore Your Paint Surface?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our paint decontamination service. We serve all areas of Ayrshire including Kilmarnock, Irvine, Troon, Ayr, and Prestwick.
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

export default PaintDecontamination;
