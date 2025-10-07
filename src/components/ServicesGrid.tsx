import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      title: "Paint Decontamination",
      description: "Remove embedded contaminants and restore paint surface clarity",
      icon: Car,
      color: "grass-green",
      link: "/paint-decontamination"
    },
    {
      title: "Ceramic Coatings", 
      description: "Long-lasting protection for your vehicle's paint and surfaces",
      icon: Sparkles,
      color: "grass-green",
      link: "/ceramic-coating"
    },
    {
      title: "Paint Correction",
      description: "Remove scratches, swirls, and imperfections from paint surface",
      icon: Shield,
      color: "grass-green",
      link: "/paint-correction"
    },
    {
      title: "Decal Removal",
      description: "Professional removal of stickers, decals, and adhesive residues",
      icon: Shield,
      color: "grass-green",
      link: "/decal-removal"
    },
    {
      title: "Full Valets/Mini Valets",
      description: "Comprehensive or quick cleaning services to suit your needs",
      icon: Sparkles,
      color: "grass-green",
      link: "/car-valeting"
    },
    {
      title: "Deep Cleans",
      description: "Intensive cleaning for heavily soiled or neglected vehicles",
      icon: Shield,
      color: "grass-green",
      link: "/deep-clean"
    },
    {
      title: "Maintenance Washes",
      description: "Regular maintenance to keep your vehicle looking its best",
      icon: Car,
      color: "grass-green",
      link: "/maintenance-wash"
    }
  ];

  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional mobile detailing & valeting services across Ayrshire. From full valets to mini valets, we come to you with everything needed for a showroom-fresh finish. No water or electricity required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="card-service group flex flex-col h-full">
              {/* Service Icon */}
              <div className="mb-6 flex justify-center">
                <div className={`w-16 h-16 bg-[hsl(var(--${service.color}))] rounded-full flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4 text-center flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mt-auto">
                  <Link to={service.link}>
                    <Button 
                      variant="outline"
                      className="w-full border-2 font-semibold rounded-full group/button"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleQuoteClick}
                    className={`w-full bg-[hsl(var(--${service.color}))] hover:bg-[hsl(var(--${service.color}))] hover:opacity-90 text-primary-foreground font-semibold rounded-full group/button`}
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;