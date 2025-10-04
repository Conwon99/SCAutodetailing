import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    message: ''
  });
  const { toast } = useToast();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = "Free Quote Request from Website";
    const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Postcode: ${formData.postcode}
Message: ${formData.message}`;
    
    const mailtoLink = `mailto:scautodetailinguk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Quote request ready!",
      description: "Your email client will open with the request details. We'll respond within 24 hours.",
    });
  };

  const handleCallClick = () => {
    window.location.href = "tel:07961817087";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/447961817087?text=Hi%20SC%20Auto%20Detailing,%20I'd%20like%20a%20free%20quote%20for%20my%20car";
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Call or WhatsApp now, or request a free quote—attach photos for a faster estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch Right Now
              </h3>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleCallClick}
                  className="w-full justify-start gap-4 p-6 h-auto bg-[hsl(var(--grass-green))] hover:bg-[hsl(var(--grass-green))] hover:opacity-90 text-white rounded-2xl"
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Call SC Auto Detailing</div>
                    <div className="text-sm opacity-90">07961 817087</div>
                  </div>
                </Button>

                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full justify-start gap-4 p-6 h-auto bg-[hsl(var(--sky-blue))] hover:bg-[hsl(var(--sky-blue))] hover:opacity-90 text-foreground rounded-2xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">WhatsApp</div>
                    <div className="text-sm opacity-70">Quick response guaranteed</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Business Info */}
            <div className="space-y-6 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">scautodetailinguk@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Service Area</div>
                  <div className="text-muted-foreground">Ayrshire</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[hsl(var(--grass-green))] mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Response Time</div>
                  <div className="text-muted-foreground">Usually within a week for quotes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="card-service">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="postcode" className="text-foreground font-semibold">Postcode</Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>


              <div>
                <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your car needs..."
                  className="mt-2 rounded-xl border-2 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full btn-hero">
                Send Quote Request ✨
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;