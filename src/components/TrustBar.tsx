import { Shield, MapPin, Star, Phone } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: MapPin,
      text: "Local"
    },
    {
      icon: Shield,
      text: "Insured"
    },
    {
      icon: Phone,
      text: "Free Quotes"
    },
    {
      icon: Star,
      text: "5★ Recommended"
    }
  ];

  return (
    <section 
      className="py-8"
      style={{
        background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)'
      }}
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="w-6 h-6" />
              <span className="font-semibold text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;