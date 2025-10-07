import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

const CeramicCoating = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20ceramic%20coating%20service";
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
                Ceramic Coating in{" "}
                <span className="text-[hsl(var(--grass-green))]">Ayrshire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Protect your vehicle with long-lasting ceramic coating technology. Our professional ceramic coating service provides superior protection and a stunning glossy finish that lasts for years.
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

      {/* What is Ceramic Coating */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                What is Ceramic Coating?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint to create a protective layer. This nanotechnology creates an incredibly durable, hydrophobic surface that repels water, dirt, and contaminants while providing UV protection and enhanced gloss.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional waxes that last weeks or months, ceramic coatings can provide protection for 2-5 years depending on the product and maintenance. The coating creates a semi-permanent bond with your paint, making it incredibly resistant to environmental damage, bird droppings, acid rain, and UV rays.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2-5 Year Protection</h3>
                  <p className="text-muted-foreground">Ceramic coatings provide long-lasting protection far superior to traditional waxes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Gloss</h3>
                  <p className="text-muted-foreground">Creates a deep, wet-looking shine that makes your vehicle stand out.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Hydrophobic Properties</h3>
                  <p className="text-muted-foreground">Water beads and rolls off easily, making washing and maintenance much easier.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Benefits of Ceramic Coating
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ceramic coating service provides comprehensive protection and enhancement for your vehicle's appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">UV Protection</h3>
              <p className="text-muted-foreground">Protects your paint from harmful UV rays that cause fading and oxidation.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Chemical Resistance</h3>
              <p className="text-muted-foreground">Resistant to bird droppings, acid rain, and other chemical contaminants.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Easier Maintenance</h3>
              <p className="text-muted-foreground">Dirt and grime slide off easily, reducing the need for frequent washing.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Long-Lasting</h3>
              <p className="text-muted-foreground">Provides protection for years, not months like traditional waxes.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Scratch Resistance</h3>
              <p className="text-muted-foreground">Creates a harder surface that resists minor scratches and swirl marks.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Value Protection</h3>
              <p className="text-muted-foreground">Helps maintain your vehicle's value by protecting the paint finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Ceramic Coating Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a meticulous process to ensure optimal bonding and maximum protection for your vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paint Preparation</h3>
              <p className="text-muted-foreground">Thorough washing and paint decontamination to ensure clean surface.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paint Correction</h3>
              <p className="text-muted-foreground">Remove swirl marks and imperfections for perfect paint condition.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Surface Cleaning</h3>
              <p className="text-muted-foreground">Final cleaning with isopropyl alcohol to remove any residues.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Coating Application</h3>
              <p className="text-muted-foreground">Professional application of ceramic coating in controlled environment.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Curing & Inspection</h3>
              <p className="text-muted-foreground">Allow proper curing time and final quality inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing for Ceramic Coating?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Ayrshire's trusted ceramic coating specialists with years of experience and professional-grade products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Products</h3>
              <p className="text-muted-foreground">We use only premium ceramic coating products from trusted manufacturers.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile Service</h3>
              <p className="text-muted-foreground">We come to your location across Ayrshire with all necessary equipment.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Application</h3>
              <p className="text-muted-foreground">Our technicians are trained in proper ceramic coating application techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Protect Your Investment with Ceramic Coating
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our professional ceramic coating service. We serve all areas of Ayrshire including Kilmarnock, Irvine, Troon, Ayr, and Prestwick.
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

export default CeramicCoating;
