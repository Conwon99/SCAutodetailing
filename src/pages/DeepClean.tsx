import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

const DeepClean = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20deep%20clean%20service";
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
                Deep Clean Service in{" "}
                <span className="text-[hsl(var(--grass-green))]">Ayrshire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Intensive deep cleaning service for heavily soiled or neglected vehicles. Our comprehensive deep clean restores your vehicle to pristine condition using professional techniques and equipment.
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

      {/* What is Deep Clean */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                What is Deep Clean Service?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our deep clean service is an intensive cleaning process designed for vehicles that require extensive attention. This comprehensive service tackles heavily soiled areas, neglected surfaces, and deep-seated dirt that regular cleaning cannot address.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Perfect for vehicles that haven't been cleaned in months, have been used for work purposes, or have accumulated stubborn stains and odors. Our deep clean process uses specialized cleaning products, professional equipment, and advanced techniques to restore your vehicle to like-new condition.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Intensive Cleaning</h3>
                  <p className="text-muted-foreground">Thorough cleaning of all surfaces, including hard-to-reach areas and neglected spots.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Stain Removal</h3>
                  <p className="text-muted-foreground">Specialized treatment for stubborn stains, odors, and deeply embedded dirt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Extended Service</h3>
                  <p className="text-muted-foreground">Comprehensive service that typically takes 4-6 hours for complete restoration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Clean Process */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Deep Clean Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure every inch of your vehicle is thoroughly cleaned and restored.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Initial Assessment</h3>
              <p className="text-muted-foreground">Thorough inspection to identify heavily soiled areas and specific cleaning requirements.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Pre-treatment</h3>
              <p className="text-muted-foreground">Apply specialized cleaning solutions to break down stubborn dirt and stains.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Intensive Cleaning</h3>
              <p className="text-muted-foreground">Deep cleaning of all surfaces using professional equipment and techniques.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Stain Treatment</h3>
              <p className="text-muted-foreground">Targeted treatment of specific stains and heavily soiled areas.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Final Rinse & Dry</h3>
              <p className="text-muted-foreground">Thorough rinsing and drying to remove all cleaning residues.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Protection Application</h3>
              <p className="text-muted-foreground">Apply protective treatments to maintain the clean appearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What's Included in Our Deep Clean Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive deep clean service covers every aspect of your vehicle's interior and exterior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Exterior Deep Clean</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Intensive pre-wash and decontamination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Clay bar treatment for embedded contaminants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Deep wheel and tire cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Engine bay cleaning (if requested)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Paint correction for light defects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Protective wax or sealant application</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Interior Deep Clean</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Complete vacuum of all surfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Steam cleaning for stubborn stains</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Deep seat and upholstery cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Carpet and floor mat deep cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Dashboard and console deep cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                  <span>Odor elimination treatment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing for Deep Clean?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Ayrshire's trusted deep cleaning specialists with the expertise and equipment to restore any vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Equipment</h3>
              <p className="text-muted-foreground">We use professional-grade steam cleaners, extractors, and specialized tools.</p>
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
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
              <p className="text-muted-foreground">Years of experience handling heavily soiled and neglected vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Restore Your Vehicle to Pristine Condition
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our intensive deep clean service. We serve all areas of Ayrshire including Kilmarnock, Irvine, Troon, Ayr, and Prestwick.
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

export default DeepClean;
