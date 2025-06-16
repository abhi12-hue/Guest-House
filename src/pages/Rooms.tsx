import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomCarousel from '@/components/RoomCarousel';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar } from 'lucide-react';

const Rooms = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const roomDetails = [
    {
      name: "Room 1",
      size: "450 sq ft",
      occupancy: "2 guests",
      bed: "King Size",
      view: "Garden & Mountain",
     price: "Negotiable: 1999/night",
      amenities: ["Private Garden Terrace", "Luxury Marble Bathroom", "Walk-in Closet", "Coffee Station", "High-Speed WiFi"],
      description: "Our most spacious accommodation featuring a private garden terrace with stunning mountain views. Perfect for romantic getaways or special occasions.",
      image: "/ner1.jpg"
    },
    {
      name: "Room 2",
      size: "350 sq ft",
      occupancy: "2 guests", 
      bed: "Big Size",
      view: "Mountain View",
      price: "Negotiable: 1999/night",
      amenities: ["Panoramic Mountain Views", "Work Desk", "Seating Area",],
      description: "Elegantly appointed room with floor-to-ceiling windows offering breathtaking mountain vistas. Ideal for business travelers and nature enthusiasts.",
      image: "/ner2.jpg"
    },
    {
      name: "Room 3",
      size: "400 sq ft",
      occupancy: "2 guests",
      bed: "King Size",
      view: "Private Balcony",
      price: "Negotiable: 1999/night",
      amenities: ["Champagne Service", "Rose Petal Turndown", "Luxury Bath Products", "Private Balcony", "Romantic Lighting"],
      description: "An intimate retreat designed for couples, featuring a cozy fireplace and private balcony. Includes romantic touches and premium amenities.",
      image: "/ner3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Inline CSS for Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 flex items-center justify-center bg-[#1A2A44] text-white">
        <div className="text-center space-y-4 px-4 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Our <span className="text-[#D4A373]">Rooms</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover thoughtfully designed accommodations that blend luxury with comfort
          </p>
        </div>
      </section>

      {/* Room Carousel Section */}
      <section className="py-16 sm:py-20 bg-[#F5F0E6]">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16 opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2A44] mb-6">
              Featured Accommodations
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our carefully curated selection of rooms, each designed to provide 
              a unique and memorable experience for every type of traveler.
            </p>
          </div>
          
          <div ref={addToRefs} className="opacity-0">
            <RoomCarousel />
          </div>
        </div>
      </section>

      {/* Detailed Room Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16 opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2A44] mb-6">
              Room Details & Amenities
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the specific features and amenities available in each of our room types.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {roomDetails.map((room, index) => (
              <div key={index} ref={addToRefs} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover hover-lift"
                  />
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2A44] mb-2">
                      {room.name}
                    </h3>
                    <p className="text-[#D4A373] font-sans text-xl sm:text-2xl font-semibold">
                      {room.price}/night
                    </p>
                  </div>

                  <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#D4A373]" />
                      <div>
                        <p className="font-sans font-medium text-[#1A2A44]">Size</p>
                        <p className="text-gray-600 text-sm">{room.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-[#D4A373]" />
                      <div>
                        <p className="font-sans font-medium text-[#1A2A44]">Occupancy</p>
                        <p className="text-gray-600 text-sm">{room.occupancy}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-[#D4A373]" />
                      <div>
                        <p className="font-sans font-medium text-[#1A2A44]">Bed Type</p>
                        <p className="text-gray-600 text-sm">{room.bed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#D4A373]" />
                      <div>
                        <p className="font-sans font-medium text-[#1A2A44]">View</p>
                        <p className="text-gray-600 text-sm">{room.view}</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#1A2A44] mb-3">
                      Room Amenities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#D4A373] rounded-full"></div>
                          <span className="text-gray-600 text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                    <Link to="/booking">
                      <Button className="bg-[#D4A373] hover:bg-[#C89B66] text-white px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 hover-lift">
                        Book This Room
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="border-[#1A2A44] text-[#1A2A44] hover:bg-[#1A2A44] hover:text-white px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 hover-lift"
                    >
                      View Gallery
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-16 sm:py-20 bg-[#1A2A44] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div ref={addToRefs} className="max-w-3xl mx-auto space-y-6 opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to <span className="text-[#D4A373]">Book Your Stay?</span>
            </h2>
            <p className="font-sans text-base sm:text-lg leading-relaxed opacity-90">
              Experience the perfect blend of luxury and comfort. Our rooms are designed 
              to provide you with an unforgettable stay in the heart of tranquil surroundings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6">
              <Link to="/booking">
                <Button className="bg-[#D4A373] hover:bg-[#C89B66] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 hover-lift">
                  Book Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#1A2A44] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-sans font-medium transition-all duration-300 hover-lift"
              >
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;