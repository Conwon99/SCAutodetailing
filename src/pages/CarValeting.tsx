import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Clock, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

const CarValeting = () => {
  const handleQuoteClick = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20car%20valeting%20service";
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
                Car Valeting in{" "}
                <span className="text-[hsl(var(--grass-green))]">Ayrshire</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Professional mobile car valeting service across Ayrshire. From full valets to mini valets, we provide comprehensive cleaning services to keep your vehicle looking its best.
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

      {/* What is Car Valeting */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                What is Professional Car Valeting?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional car valeting is a comprehensive cleaning service that goes beyond a simple car wash. Our valeting service includes both exterior and interior cleaning, using professional-grade equipment and techniques to restore your vehicle to showroom condition.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer both full valets and mini valets to suit different needs and budgets. A full valet includes deep cleaning of all surfaces, while a mini valet provides essential cleaning for regular maintenance. Our mobile service means we come to your location with all necessary equipment, water, and power.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interior & Exterior</h3>
                  <p className="text-muted-foreground">Complete cleaning of both interior and exterior surfaces for a comprehensive service.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Professional Equipment</h3>
                  <p className="text-muted-foreground">We use professional-grade cleaning equipment and premium cleaning products.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Flexible Service</h3>
                  <p className="text-muted-foreground">Choose between full valet or mini valet depending on your needs and budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Valeting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive valeting services to keep your vehicle looking its best all year round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Full Valet</h3>
                <div className="space-y-4 text-left">
                  <h4 className="font-semibold text-foreground">Exterior Cleaning:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Pre-wash and rinse</li>
                    <li>• Two-bucket wash method</li>
                    <li>• Wheel and tire cleaning</li>
                    <li>• Paint decontamination</li>
                    <li>• Clay bar treatment</li>
                    <li>• Wax or sealant application</li>
                    <li>• Glass cleaning</li>
                    <li>• Tire dressing</li>
                  </ul>
                  <h4 className="font-semibold text-foreground">Interior Cleaning:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Vacuum all surfaces</li>
                    <li>• Dashboard and console cleaning</li>
                    <li>• Door panels and handles</li>
                    <li>• Seat cleaning and conditioning</li>
                    <li>• Carpet and floor mat cleaning</li>
                    <li>• Glass cleaning</li>
                    <li>• Air vent cleaning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mini Valet</h3>
                <div className="space-y-4 text-left">
                  <h4 className="font-semibold text-foreground">Exterior Cleaning:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Quick wash and rinse</li>
                    <li>• Wheel cleaning</li>
                    <li>• Glass cleaning</li>
                    <li>• Tire shine</li>
                  </ul>
                  <h4 className="font-semibold text-foreground">Interior Cleaning:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Vacuum main areas</li>
                    <li>• Dashboard wipe down</li>
                    <li>• Door panel cleaning</li>
                    <li>• Basic seat cleaning</li>
                    <li>• Floor mat cleaning</li>
                    <li>• Glass cleaning</li>
                  </ul>
                </div>
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
              Benefits of Professional Car Valeting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regular professional valeting provides numerous benefits for your vehicle and driving experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paint Protection</h3>
              <p className="text-muted-foreground">Regular cleaning and waxing protects your paint from environmental damage.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Improved Resale Value</h3>
              <p className="text-muted-foreground">Well-maintained vehicles retain their value better than neglected ones.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Enhanced Appearance</h3>
              <p className="text-muted-foreground">Professional valeting restores your vehicle's showroom appearance.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Time Saving</h3>
              <p className="text-muted-foreground">Professional service saves you time and effort while delivering superior results.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Health Benefits</h3>
              <p className="text-muted-foreground">Clean interior reduces allergens and creates a healthier environment.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Results</h3>
              <p className="text-muted-foreground">Professional equipment and techniques deliver superior cleaning results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose SC Auto Detailing for Car Valeting?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Ayrshire's trusted mobile valeting specialists with years of experience and professional-grade equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile Service</h3>
              <p className="text-muted-foreground">We come to your home or workplace across Ayrshire with all equipment needed.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--grass-green))] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Equipment</h3>
              <p className="text-muted-foreground">We bring professional-grade cleaning equipment, water tanks, and power generators.</p>
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
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Keep Your Vehicle Looking Its Best
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact SC Auto Detailing today for a free quote on our professional car valeting service. We serve all areas of Ayrshire including Kilmarnock, Irvine, Troon, Ayr, and Prestwick.
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

export default CarValeting;
