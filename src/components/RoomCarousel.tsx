
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
    name: "Room 1 ",
    description: "A spacious suite featuring a King Size Bed, stunning Mountain View, convenient Market access, and a Personal Bathroom for ultimate comfort.",
    image: "../../public/ner1.jpg",
    price: "Negotiable: 1999/night",
    features: ["King Size Bed", "Mountain View", "Market", "Personal Batroom"]
  },
  {
    id: 2,
    name: "Room 2",
    description: "An elegant room with a breathtaking Mountain View, comfortable King Size Bed, functional Work Desk, and a Personal Bathroom for a relaxing stay.",
    image: "../../public/ner2.jpg",
    price: "Negotiable: 1999/night",
    features: ["Mountain View", "King Size Bed", "Work Desk", "Personal Batroom"]
  },
  {
    id: 3,
    name: "Room 3",
    description: "An intimate space designed for couples, offering a luxurious King Size Bed, scenic Mountain View, Personal Bathroom, and Market access for a romantic getaway.",
    image: "../../public/ner3.jpg",
    price: "Negotiable: 1999/night",
    features: ["King Size Bed", "Mountain View", "Personal Batroom", "Market"]
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
