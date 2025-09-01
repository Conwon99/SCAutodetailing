import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Leaf } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  About SC Auto Detailing
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                Professional{" "}
                <span className="text-primary">Mobile Detailing</span>{" "}
                Service Across Ayrshire
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                SC Auto Detailing is a professional mobile detailing & valeting service proudly serving 
                Ayrshire, Scotland. We bring everything with us — no water or electricity needed — 
                so you get a showroom-fresh finish at your home or workplace.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The services we offer include:
              </p>
              
              <ul className="text-lg text-muted-foreground font-medium space-y-2">
                <li>• PAINT DECONTAMINATION</li>
                <li>• CERAMIC COATINGS</li>
                <li>• PAINT CORRECTION</li>
                <li>• STEAM CLEANING</li>
                <li>• FULLY MOBILE</li>
                <li>• FULL VALETS/MINI VALETS</li>
                <li>• DEEP CLEANS</li>
                <li>• MAINTENANCE WASHES</li>
              </ul>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mobile Service</h3>
                  <p className="text-sm text-muted-foreground">We come to you anywhere in Ayrshire</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Professional Quality</h3>
                  <p className="text-sm text-muted-foreground">Showroom-fresh results every time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Convenient</h3>
                  <p className="text-sm text-muted-foreground">No water or electricity needed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">Professional-grade eco-friendly products</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=61573170152594"}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Message us on Facebook
              </Button>
            </div>
          </div>

          {/* Before/After Slider */}
          <div className="relative">
            <BeforeAfterSlider
              beforeImage="/car2.png"
              afterImage="/car.png"
              beforeAlt="Car before detailing service"
              afterAlt="Car after professional detailing service"
            />
            
            {/* Experience Badge */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg z-10">
              <div className="text-2xl font-bold">Mobile</div>
              <div className="text-sm">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;