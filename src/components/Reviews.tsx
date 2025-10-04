import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Dean Cursley",
      location: "Ayrshire",
      rating: 5,
      text: "They did an unreal job on my Kia Niro — and trust me, it was a challenge… between banana sludge in on the seat and my wife & daughter's hair everywhere, the poor car didn't stand a chance 😂🍌💇‍♀️",
      service: "Deep Clean & Valet"
    },
    {
      name: "Catherine Graham",
      location: "Ayrshire", 
      rating: 5,
      text: "I would highly recommend scautodetailing! I had my first valet done last month and my car was shining and smelt so good. Scott takes great pride in his work taking his time to ensure the best sparkle possible. He even picked up on a few things I hadn't noticed and sorted them out too. Really reasonable price for the time it takes for such a deep clean! I'm now on the maintenance list for a regular a lot. 🙌🏻 x",
      service: "Full Valet & Maintenance"
    },
    {
      name: "Julie Watson",
      location: "Ayrshire",
      rating: 5,
      text: "Great job from Scott at Auto Detailing, fantastic attention to detail on both cars, one being a 32 year old Figaro, really brought it back to life! He was in touch to do the job very quickly after messaging him, and would highly recommend.",
      service: "Paint Restoration"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-blue-500 fill-blue-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-foreground mb-4">
            What Our <span style={{
              background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 25%, #a8a8a8 50%, #606060 75%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Ayrshire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-service bg-background p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-lg">
                  {review.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {review.location} • {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <div className="text-foreground font-semibold">
              5.0 out of 5 stars from 50+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;