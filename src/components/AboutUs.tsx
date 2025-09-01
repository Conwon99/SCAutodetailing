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
                <Award className="w-6 h-6" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  Why Choose SC Auto Detailing
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                Experience{" "}
                <span className="text-primary">Professional Excellence</span>{" "}
                in Car Care
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose SC Auto Detailing for unmatched quality and convenience. Our mobile service brings 
                professional detailing expertise directly to your doorstep, ensuring your vehicle receives 
                the care it deserves without disrupting your busy schedule.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets us apart:
              </p>
              
              <ul className="text-lg text-muted-foreground font-medium space-y-2">
                <li>• FULLY MOBILE SERVICE - We come to you</li>
                <li>• PROFESSIONAL EQUIPMENT - No water or electricity needed</li>
                <li>• SHOWROOM QUALITY RESULTS - Every time</li>
                <li>• ECO-FRIENDLY PRODUCTS - Safe for your vehicle and environment</li>
                <li>• EXPERIENCED TECHNICIANS - Trained in latest techniques</li>
                <li>• COMPETITIVE PRICING - Quality service at fair rates</li>
                <li>• FLEXIBLE SCHEDULING - Work around your availability</li>
                <li>• SATISFACTION GUARANTEED - 100% recommended by customers</li>
              </ul>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Professional Quality</h3>
                  <p className="text-sm text-muted-foreground">Showroom-fresh results every time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mobile Convenience</h3>
                  <p className="text-sm text-muted-foreground">We come to you anywhere in Ayrshire</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Time Saving</h3>
                  <p className="text-sm text-muted-foreground">No travel time or waiting around</p>
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
              beforeImage="/before.jpg"
              afterImage="/after.jpg"
              beforeAlt="Car before detailing service"
              afterAlt="Car after professional detailing service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;