import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

const Kilmarnock = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20car%20detailing%20in%20Kilmarnock";
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
                Car Detailing in{" "}
                <span className="text-[hsl(var(--grass-green))]">Kilmarnock</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Professional mobile car detailing and valeting services in Kilmarnock, Ayrshire. We come to your home or workplace with all the equipment needed for showroom-quality results.
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
              <span>Serving Kilmarnock and surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Kilmarnock Service */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Professional Car Detailing in Kilmarnock
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SC Auto Detailing proudly serves the Kilmarnock area with professional mobile car detailing and valeting services. As Kilmarnock's premier mobile detailing service, we bring showroom-quality results directly to your doorstep.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're located near the town center, Dean Castle Country Park, or anywhere in the Kilmarnock area, our mobile service ensures convenience without compromising on quality. We serve residential areas, business districts, and industrial estates throughout Kilmarnock.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Full Kilmarnock Coverage</h3>
                  <p className="text-muted-foreground">We serve all areas of Kilmarnock including town center, residential areas, and business districts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">We understand Kilmarnock's unique environmental challenges and tailor our services accordingly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">Convenient appointment times to fit your busy Kilmarnock lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Kilmarnock */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Services in Kilmarnock
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive car detailing and valeting services throughout the Kilmarnock area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Paint Decontamination</h3>
              <p className="text-muted-foreground">Remove embedded contaminants from your vehicle's paint surface for a clean, smooth finish.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Ceramic Coatings</h3>
              <p className="text-muted-foreground">Long-lasting protection for your vehicle's paint and surfaces with professional ceramic coating.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Paint Correction</h3>
              <p className="text-muted-foreground">Remove scratches, swirls, and imperfections to restore your paint to showroom condition.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Car Valeting</h3>
              <p className="text-muted-foreground">Comprehensive interior and exterior cleaning with full valet and mini valet options.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Deep Clean</h3>
              <p className="text-muted-foreground">Intensive cleaning for heavily soiled or neglected vehicles requiring special attention.</p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Maintenance Wash</h3>
              <p className="text-muted-foreground">Regular maintenance washing to keep your vehicle looking its best between major services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas We Serve */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Areas We Serve in Kilmarnock
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide mobile car detailing services throughout Kilmarnock and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Town Center</h3>
              <p className="text-muted-foreground">Kilmarnock town center and main shopping areas</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Residential Areas</h3>
              <p className="text-muted-foreground">All residential neighborhoods throughout Kilmarnock</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Business Districts</h3>
              <p className="text-muted-foreground">Industrial estates and business parks in Kilmarnock</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Dean Castle</h3>
              <p className="text-muted-foreground">Areas near Dean Castle Country Park and surrounding neighborhoods</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Kilmarnock Academy</h3>
              <p className="text-muted-foreground">Areas around Kilmarnock Academy and educational institutions</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Rugby Park</h3>
              <p className="text-muted-foreground">Areas near Rugby Park stadium and surrounding districts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Kilmarnock */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing in Kilmarnock?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Kilmarnock's trusted mobile detailing specialists with local knowledge and professional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Local Service</h3>
              <p className="text-muted-foreground">We're based in Ayrshire and understand the local Kilmarnock market and needs.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile Convenience</h3>
              <p className="text-muted-foreground">We come to your Kilmarnock location with all equipment and supplies needed.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Quality</h3>
              <p className="text-muted-foreground">Showroom-quality results using professional-grade equipment and techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Get Your Free Quote for Kilmarnock Car Detailing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our professional mobile car detailing service in Kilmarnock. We serve all areas of Kilmarnock and surrounding neighborhoods.
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

export default Kilmarnock;
