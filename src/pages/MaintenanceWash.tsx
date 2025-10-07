import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

const MaintenanceWash = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20maintenance%20wash%20service";
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
                Maintenance Wash in{" "}
                <span className="text-[hsl(var(--grass-green))]">Ayrshire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Regular maintenance washing service to keep your vehicle looking its best. Our maintenance wash provides essential cleaning to preserve your vehicle's appearance and protect your investment.
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

      {/* What is Maintenance Wash */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                What is Maintenance Wash Service?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our maintenance wash service is designed to keep your vehicle in excellent condition between more intensive detailing services. This regular cleaning service helps maintain your vehicle's appearance and protects your investment by removing dirt, grime, and environmental contaminants before they can cause damage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Perfect for vehicle owners who want to maintain their car's appearance with regular professional cleaning. Our maintenance wash is more thorough than a basic car wash but more affordable than a full valet service, making it ideal for regular upkeep and preservation of your vehicle's condition.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Regular Maintenance</h3>
                  <p className="text-muted-foreground">Designed for regular use to maintain your vehicle's appearance between major services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Protection Focus</h3>
                  <p className="text-muted-foreground">Helps protect your paint and surfaces from environmental damage and contamination.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cost Effective</h3>
                  <p className="text-muted-foreground">Affordable service that provides excellent value for regular vehicle maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What's Included in Our Maintenance Wash
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our maintenance wash service provides comprehensive cleaning to keep your vehicle looking its best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Exterior Cleaning</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Pre-wash and rinse to remove loose dirt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Two-bucket wash method for paint protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Wheel and tire cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Glass cleaning (exterior)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Tire shine application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Quick wax or spray sealant (if requested)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Interior Cleaning</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Vacuum of main areas (seats, floors, boot)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Dashboard and console wipe down</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Door panels and handles cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Glass cleaning (interior)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Basic seat cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[hsl(var(--grass-green))] mt-1" />
                    <span>Floor mat cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Benefits of Regular Maintenance Washing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regular maintenance washing provides numerous benefits for your vehicle's appearance and longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paint Protection</h3>
              <p className="text-muted-foreground">Regular cleaning prevents dirt and contaminants from damaging your paint.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Value Preservation</h3>
              <p className="text-muted-foreground">Well-maintained vehicles retain their resale value better than neglected ones.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Consistent Appearance</h3>
              <p className="text-muted-foreground">Regular maintenance keeps your vehicle looking clean and professional.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cost Effective</h3>
              <p className="text-muted-foreground">Prevents the need for more expensive deep cleaning services.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Convenience</h3>
              <p className="text-muted-foreground">Professional service saves you time and effort while delivering superior results.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Health Benefits</h3>
              <p className="text-muted-foreground">Clean interior reduces allergens and creates a healthier environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Schedule */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Recommended Maintenance Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We recommend different maintenance schedules based on your vehicle usage and environmental conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Light Usage</h3>
              <p className="text-muted-foreground mb-4">Garaged vehicle, minimal exposure to elements</p>
              <div className="text-2xl font-bold text-[hsl(var(--grass-green))]">Every 4-6 weeks</div>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Regular Usage</h3>
              <p className="text-muted-foreground mb-4">Daily driver, normal environmental exposure</p>
              <div className="text-2xl font-bold text-[hsl(var(--grass-green))]">Every 2-3 weeks</div>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Heavy Usage</h3>
              <p className="text-muted-foreground mb-4">High mileage, work vehicle, harsh conditions</p>
              <div className="text-2xl font-bold text-[hsl(var(--grass-green))]">Every 1-2 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing for Maintenance Washing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Ayrshire's trusted maintenance washing specialists with flexible scheduling and professional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile Service</h3>
              <p className="text-muted-foreground">We come to your location across Ayrshire with all necessary equipment.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Convenient scheduling options to fit your busy lifestyle.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Products</h3>
              <p className="text-muted-foreground">We use professional-grade cleaning products that are safe for your vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Keep Your Vehicle Looking Its Best
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our maintenance wash service. We serve all areas of Ayrshire including Kilmarnock, Irvine, Troon, Ayr, and Prestwick.
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

export default MaintenanceWash;
