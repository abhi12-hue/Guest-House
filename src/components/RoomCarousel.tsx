
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Garden Suite",
    description: "Spacious suite with a king-size bed, private garden terrace, and luxurious amenities for the ultimate comfort.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    price: "$299/night",
    features: ["King Size Bed", "Private Terrace", "Garden View", "Luxury Bath"]
  },
  {
    id: 2,
    name: "Mountain View Room",
    description: "Elegant room featuring panoramic mountain views, modern furnishings, and a cozy seating area perfect for relaxation.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    price: "$199/night",
    features: ["Mountain View", "Queen Bed", "Work Desk", "Mini Bar"]
  },
  {
    id: 3,
    name: "Romantic Hideaway",
    description: "Intimate space designed for couples with premium bedding, ambient lighting, and special romantic touches throughout.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    price: "$349/night",
    features: ["King Size Bed", "Fireplace", "Private Balcony", "Champagne Service"]
  }
];

const RoomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % rooms.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-luxury-cream rounded-2xl overflow-hidden shadow-2xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-luxury-navy mb-2">
                      {room.name}
                    </h3>
                    <p className="text-luxury-gold font-inter text-xl font-semibold">
                      {room.price}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {room.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-playfair text-lg font-semibold text-luxury-navy">
                      Room Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-luxury-navy hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-luxury-navy hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {rooms.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-luxury-gold scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomCarousel;
