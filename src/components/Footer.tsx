import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--asphalt-grey))] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
              <li><Link to="/paint-decontamination" className="hover:text-blue-400 transition-colors">Paint Decontamination</Link></li>
              <li><Link to="/ceramic-coating" className="hover:text-blue-400 transition-colors">Ceramic Coatings</Link></li>
              <li><Link to="/paint-correction" className="hover:text-blue-400 transition-colors">Paint Correction</Link></li>
              <li><Link to="/decal-removal" className="hover:text-blue-400 transition-colors">Decal Removal</Link></li>
              <li><Link to="/car-valeting" className="hover:text-blue-400 transition-colors">Full Valets/Mini Valets</Link></li>
              <li><Link to="/deep-clean" className="hover:text-blue-400 transition-colors">Deep Cleans</Link></li>
              <li><Link to="/maintenance-wash" className="hover:text-blue-400 transition-colors">Maintenance Washes</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-blue-500 mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/kilmarnock" className="hover:text-blue-400 transition-colors">Kilmarnock</Link></li>
              <li><Link to="/irvine" className="hover:text-blue-400 transition-colors">Irvine</Link></li>
              <li><Link to="/troon" className="hover:text-blue-400 transition-colors">Troon</Link></li>
              <li><Link to="/ayr" className="hover:text-blue-400 transition-colors">Ayr</Link></li>
              <li><Link to="/prestwick" className="hover:text-blue-400 transition-colors">Prestwick</Link></li>
              <li><span className="text-gray-400">All Ayrshire Areas</span></li>
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