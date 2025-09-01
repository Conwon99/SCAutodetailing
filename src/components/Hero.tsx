import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+447853224528";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=61573170152594";
  };

  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 px-4 pt-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/SCBg3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-1 gap-0 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight italic uppercase" style={{ fontStyle: 'italic', textTransform: 'uppercase' }}>
                Mobile{" "}
                <span className="text-primary">Detailing & Valeting</span>{" "}
                in Ayrshire
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                We come to you — no water or electricity needed. Professional mobile detailing & valeting service 
                proudly serving Ayrshire, Scotland. Get a showroom-fresh finish at your home or workplace.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleCallClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  transform: 'skew(-20deg)',
                  borderRadius: '0'
                }}
              >
                <span style={{ transform: 'skew(20deg)' }}>
                  Call us: 07961 817087
                </span>
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground font-medium">Recommended</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">30+</div>
                <div className="text-muted-foreground font-medium">Reviews</div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <Button 
                onClick={handleWhatsAppClick}
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-4 py-3 justify-start"
              >
                <MessageCircle className="w-5 h-5" />
                Facebook
              </Button>
              <div className="text-sm text-muted-foreground pt-2">
                Prefer Facebook? Message us for availability this week.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;