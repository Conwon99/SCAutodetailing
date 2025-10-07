import { MessageCircle, FileText, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
  </svg>
);

const Process = () => {

  const processSteps = [
    {
      number: "01",
      title: "Get In Touch",
      description: "Contact us via WhatsApp with details about your vehicle and requirements. We'll respond quickly with availability and any questions.",
      icon: MessageCircle
    },
    {
      number: "02", 
      title: "Receive Your Quote",
      description: "Get a detailed, transparent quote tailored to your specific needs. No hidden fees, no surprises - just honest pricing for quality service.",
      icon: FileText
    },
    {
      number: "03",
      title: "We Come To You",
      description: "Our professional team arrives at your location with all equipment needed. Enjoy the convenience of mobile service while we work.",
      icon: Car
    }
  ];

  const handleWhatsAppClick = () => {
    trackEvent('cta_click', { location: 'Process', cta: 'whatsapp' });
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20my%20car";
  };

  return (
    <section id="process" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span style={{
              background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Getting professional car detailing has never been easier. Our streamlined process ensures you get the best service with minimal effort on your part.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/Car, how it works..jpg"
                alt="How SC Auto Detailing works - professional mobile car detailing process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-8 flex justify-center lg:justify-start">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <WhatsAppIcon />
                WhatsApp us
              </Button>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
              Cancellation & Rescheduling Policy
            </h3>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-muted-foreground leading-relaxed mb-6">
                At SC Auto Detailing, every appointment counts. As a small business, last-minute changes affect both our team and clients waiting for openings.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground"><strong>Cancellations or reschedules require 24+ hours' notice.</strong></p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">With <strong>less than 24 hours' notice</strong> or <strong>arrivals 30+ minutes late</strong>, a <strong>50% fee</strong> applies.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground"><strong>No-shows will be charged 100%</strong> of the service.</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mt-6 text-center italic">
                Thank you for your understanding—this policy allows us to serve all clients better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
