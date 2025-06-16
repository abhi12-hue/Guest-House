
import { useEffect, useRef } from 'react';
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
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const roomDetails = [
    {
      name: "Deluxe Garden Suite",
      size: "450 sq ft",
      occupancy: "2 guests",
      bed: "King Size",
      view: "Garden & Mountain",
      price: "$299",
      amenities: ["Private Garden Terrace", "Luxury Marble Bathroom", "Walk-in Closet", "Minibar", "Coffee Station", "High-Speed WiFi"],
      description: "Our most spacious accommodation featuring a private garden terrace with stunning mountain views. Perfect for romantic getaways or special occasions.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      name: "Mountain View Room",
      size: "350 sq ft",
      occupancy: "2 guests", 
      bed: "Queen Size",
      view: "Mountain View",
      price: "$199",
      amenities: ["Panoramic Mountain Views", "Work Desk", "Seating Area", "Mini Refrigerator", "Premium Bedding", "Complimentary WiFi"],
      description: "Elegantly appointed room with floor-to-ceiling windows offering breathtaking mountain vistas. Ideal for business travelers and nature enthusiasts.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Romantic Hideaway",
      size: "400 sq ft",
      occupancy: "2 guests",
      bed: "King Size",
      view: "Private Balcony",
      price: "$349",
      amenities: ["Private Fireplace", "Champagne Service", "Rose Petal Turndown", "Luxury Bath Products", "Private Balcony", "Romantic Lighting"],
      description: "An intimate retreat designed for couples, featuring a cozy fireplace and private balcony. Includes romantic touches and premium amenities.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-luxury-navy">
        <div className="text-center text-white space-y-4 px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold">
            Our <span className="text-luxury-gold">Rooms</span>
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            Discover thoughtfully designed accommodations that blend luxury with comfort
          </p>
        </div>
      </section>

      {/* Room Carousel Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Featured Accommodations
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl font-bold text-luxury-navy mb-6">
              Room Details & Amenities
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the specific features and amenities available in each of our room types.
            </p>
          </div>

          <div className="space-y-20">
            {roomDetails.map((room, index) => (
              <div key={index} ref={addToRefs} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover-lift"
                  />
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-luxury-navy mb-2">
                      {room.name}
                    </h3>
                    <p className="text-luxury-gold font-inter text-2xl font-semibold">
                      {room.price}/night
                    </p>
                  </div>

                  <p className="font-inter text-lg text-gray-600 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                      <div>
                        <p className="font-inter font-medium text-luxury-navy">Size</p>
                        <p className="text-gray-600 text-sm">{room.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-luxury-gold" />
                      <div>
                        <p className="font-inter font-medium text-luxury-navy">Occupancy</p>
                        <p className="text-gray-600 text-sm">{room.occupancy}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-luxury-gold" />
                      <div>
                        <p className="font-inter font-medium text-luxury-navy">Bed Type</p>
                        <p className="text-gray-600 text-sm">{room.bed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                      <div>
                        <p className="font-inter font-medium text-luxury-navy">View</p>
                        <p className="text-gray-600 text-sm">{room.view}</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="font-playfair text-xl font-semibold text-luxury-navy mb-3">
                      Room Amenities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                          <span className="text-gray-600 text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105">
                      Book This Room
                    </Button>
                    <Button variant="outline" className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white px-6 py-3 rounded-full font-inter font-medium transition-all duration-300">
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
      <section className="py-20 bg-luxury-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div ref={addToRefs} className="max-w-3xl mx-auto space-y-6 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Ready to <span className="text-luxury-gold">Book Your Stay?</span>
            </h2>
            <p className="font-inter text-lg leading-relaxed opacity-90">
              Experience the perfect blend of luxury and comfort. Our rooms are designed 
              to provide you with an unforgettable stay in the heart of tranquil surroundings.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center pt-6">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-4 text-lg rounded-full font-inter font-medium transition-all duration-300 hover:scale-105">
                Book Now
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-luxury-navy px-8 py-4 text-lg rounded-full font-inter font-medium transition-all duration-300">
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
