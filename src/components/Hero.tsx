import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const WhatsAppIcon = () => (
  <svg width="60" height="60" viewBox="0 0 32 32" fill="currentColor">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
  </svg>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    { src: "/beforeafter/Car before.jpg", alt: "Car before detailing service", label: "Before" },
    { src: "/beforeafter/Car after.jpg", alt: "Car after professional detailing service", label: "After" },
    { src: "/beforeafter/Car one before..jpg", alt: "Vehicle before paint correction", label: "Before" },
    { src: "/beforeafter/Car1after.jpg", alt: "Vehicle after paint correction and detailing", label: "After" },
    { src: "/beforeafter/Interior before..jpg", alt: "Car interior before deep clean", label: "Before" },
    { src: "/beforeafter/Interior after. - Copy.jpg", alt: "Car interior after steam cleaning", label: "After" },
    { src: "/beforeafter/Decal before..jpg", alt: "Vehicle before decal removal", label: "Before" },
    { src: "/beforeafter/Decal after..jpg", alt: "Vehicle after professional decal removal", label: "After" },
    { src: "/beforeafter/Scratch before..jpg", alt: "Paint scratches before correction", label: "Before" },
    { src: "/beforeafter/Scratch after..jpg", alt: "Paint after scratch repair and correction", label: "After" }
  ];

  const handleWhatsAppClick = () => {
    trackEvent('cta_click', { location: 'Hero', cta: 'whatsapp' });
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20my%20car";
  };

  const handleFacebookClick = () => {
    trackEvent('cta_click', { location: 'Hero', cta: 'facebook' });
    window.location.href = "https://www.facebook.com/profile.php?id=61573170152594";
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  const handleQuoteClick = () => {
    trackEvent('cta_click', { location: 'Hero', cta: 'quote_scroll' });
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 px-4 pt-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: 'url("/Black%20Gradient%20Chrome%20Good%20Vibes%20Desktop%20Wallpaper.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
                      <h1 className="hero-title font-bold text-5xl lg:text-6xl text-white leading-tight tracking-wide" style={{ letterSpacing: '-0.01em' }}>
                        Mobile Detailing &{" "}
                        <span style={{ 
                          background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          Valeting
                </span>
                      </h1>
              
              {/* Location Subheading */}
              <div className="flex items-center gap-2 text-lg text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="uppercase tracking-wide">Ayrshire</span>
              </div>
              
              <p className="text-xl text-slate-300 font-medium max-w-lg leading-relaxed">
                We come to you — no water or electricity needed. Professional mobile detailing & valeting service 
                proudly serving Ayrshire, Scotland. Get a showroom-fresh finish at your home or workplace.
              </p>
            </div>

            {/* Mobile Slideshow - Above CTA on mobile only */}
            <div className="block lg:hidden mb-8">
              <div className="relative h-[300px] overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 ${
                          isActive 
                            ? 'translate-x-0 z-10' 
                            : 'translate-x-full z-0'
                        }`}
                        style={{
                          transition: 'transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold z-30 border border-blue-400/50">
                          {slide.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleWhatsAppClick}
                        className="relative text-white text-lg px-10 py-6 h-auto font-bold transition-all duration-300 hover:scale-105 rounded-full bg-green-500 hover:bg-green-600"
                        style={{
                          boxShadow: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)'
                        }}
              >
                <span className="flex items-center gap-2 relative z-10">
                  <WhatsAppIcon />
                  WhatsApp us
                </span>
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 pt-8">
              <div className="space-y-2">
                <div
                  className="text-4xl lg:text-5xl font-bold text-transparent"
                  style={{
                    background:
                      'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  100%
                </div>
                <div
                  className="font-medium uppercase tracking-wide text-transparent"
                  style={{
                    background:
                      'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Recommended
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="text-4xl lg:text-5xl font-bold text-transparent"
                  style={{
                    background:
                      'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  30+
                </div>
                <div
                  className="font-medium uppercase tracking-wide text-transparent"
                  style={{
                    background:
                      'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Reviews
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
              <Button 
                onClick={handleFacebookClick}
                variant="ghost" 
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg px-4 py-3 justify-start border border-slate-600 hover:border-blue-400/50 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Facebook
              </Button>
              <div className="text-sm text-slate-400 pt-2">
                Prefer Facebook? Message us for availability this week.
              </div>
            </div>
          </div>

          {/* Desktop Slideshow - Right side on desktop */}
          <div className="hidden lg:block">
            <div className="relative h-[500px] overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                {slides.map((slide, index) => {
                  const isActive = index === currentSlide;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 ${
                        isActive 
                          ? 'translate-x-0 z-10' 
                          : 'translate-x-full z-0'
                      }`}
                      style={{
                        transition: 'transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold z-30 border border-blue-400/50">
                        {slide.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;