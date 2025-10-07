import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--asphalt-grey))] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-blue-500 mb-4">
                SC Auto Detailing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Professional mobile detailing & valeting service across Ayrshire. 
                We come to you — no water or electricity needed.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--sky-blue))]" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--sky-blue))]" />
                <span>Ayrshire, Scotland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-blue-500 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>• Paint Decontamination</li>
              <li>• Ceramic Coatings</li>
              <li>• Paint Correction</li>
              <li>• Decal Removal</li>
              <li>• Full Valets/Mini Valets</li>
              <li>• Deep Cleans</li>
              <li>• Maintenance Washes</li>
            </ul>
          </div>

          {/* About SC Auto Detailing */}
          <div>
            <h4 className="font-display text-xl font-bold text-blue-500 mb-6">
              About SC Auto Detailing
            </h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional mobile detailing & valeting service proudly serving Ayrshire, Scotland. 
              We bring everything with us — no water or electricity needed — so you get a 
              showroom-fresh finish at your home or workplace.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61573170152594" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[hsl(var(--sky-blue))] hover:text-blue-500 transition-colors"
                onClick={() => trackEvent('cta_click', { location: 'Footer', cta: 'facebook' })}
              >
                <Facebook className="w-5 h-5" />
                <span>Message us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} SC Auto Detailing. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center">
              Professional mobile car detailing & valeting across Ayrshire.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;