import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Sparkles, Shield } from "lucide-react";
import carImage from "@/assets/hero-garden.jpg";

const ServicesGrid = () => {
  const services = [
    {
      title: "Full Valet",
      description: "Complete interior and exterior detailing for a showroom finish",
      features: ["Interior deep cleaning", "Exterior wash & wax", "Tire & wheel detailing", "Glass & mirror polishing"],
      image: carImage,
      icon: Car,
      color: "grass-green"
    },
    {
      title: "Standard Valet", 
      description: "Comprehensive cleaning service for regular maintenance",
      features: ["Interior vacuum & wipe", "Exterior wash & dry", "Tire cleaning", "Window cleaning"],
      image: carImage,
      icon: Sparkles,
      color: "sky-blue"
    },
    {
      title: "Mini Valet",
      description: "Quick refresh service for busy schedules",
      features: ["Interior tidy & vacuum", "Exterior wash", "Basic interior cleaning", "Quick turnaround"],
      image: carImage,
      icon: Shield,
      color: "donut-pink"
    },
    {
      title: "Mobile Service",
      description: "We come to you anywhere in Ayrshire",
      features: ["No water needed", "No electricity needed", "Professional equipment", "Convenient location"],
      image: carImage,
      icon: Car,
      color: "sunshine-yellow"
    }
  ];

  const handleQuoteClick = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=61573170152594";
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
            Professional mobile detailing & valeting services across Ayrshire. From full valets to mini valets, we come to you with everything needed for a showroom-fresh finish. No water or electricity required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              {/* Service Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service in Ayrshire`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-[hsl(var(--${service.color}))] rounded-full flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-[hsl(var(--asphalt-grey))]" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--grass-green))] rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={handleQuoteClick}
                  className={`w-full bg-[hsl(var(--${service.color}))] hover:bg-[hsl(var(--${service.color}))] hover:opacity-90 text-[hsl(var(--asphalt-grey))] font-semibold rounded-full group/button`}
                >
                  Message on Facebook
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;