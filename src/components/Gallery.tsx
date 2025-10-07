import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/Gallery/553888188_1134887874808457_5288069144025439327_n.jpg",
      alt: "Professional car detailing service - exceptional paint correction results",
      title: "Paint Correction",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/553925102_1233161851866729_1637886665257220047_n.jpg",
      alt: "Mobile car valeting service - showroom quality transformation",
      title: "Vehicle Transformation",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/after.jpg",
      alt: "Car after professional detailing service - pristine finish",
      title: "After Service",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/Car gallery 2.jpg",
      alt: "Professional mobile car detailing service - comprehensive cleaning",
      title: "Complete Detailing",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/Car gallery 3..jpg",
      alt: "Mobile car valeting service - exceptional transformation",
      title: "Mobile Valeting",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/Car Gallery 6..jpg",
      alt: "Mobile detailing service - showroom quality results",
      title: "Professional Service",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/Car Gallery 7..jpg",
      alt: "Professional car detailing service - exceptional results",
      title: "Premium Detailing",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/Car gallery one..jpg",
      alt: "Comprehensive car detailing and valeting service",
      title: "Full Service",
      location: "Ayrshire"
    },
    {
      src: "/Gallery/Clark Gallery 5..jpg",
      alt: "Professional car detailing service - comprehensive cleaning results",
      title: "Deep Clean",
      location: "Ayrshire"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Our <span style={{
              background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Work</span> Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our professional car detailing and valeting work across Ayrshire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=61573170152594"}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 text-center"
          >
            View more on Facebook
          </Button>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;