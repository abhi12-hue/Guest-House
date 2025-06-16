
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, MapPin, Home } from 'lucide-react';

const Amenities = () => {
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

  const amenityCategories = [
    {
      title: "Wellness & Recreation",
      icon: <Users className="w-8 h-8" />,
      color: "bg-luxury-gold",
      amenities: [
        {
          name: "Outdoor Pool & Spa",
          description: "Heated infinity pool with mountain views and therapeutic spa treatments",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        },
        {
          name: "Fitness Center",
          description: "Fully equipped gym with modern equipment and personal training services",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
        },
        {
          name: "Meditation Garden",
          description: "Tranquil outdoor space designed for relaxation and mindfulness practices",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
        }
      ]
    },
    {
      title: "Dining & Entertainment",
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-luxury-sage",
      amenities: [
        {
          name: "Gourmet Restaurant",
          description: "Farm-to-table cuisine featuring locally sourced ingredients and seasonal menus",
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        },
        {
          name: "Wine Cellar & Tasting",
          description: "Curated selection of regional wines with guided tasting experiences",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
        },
        {
          name: "Library Lounge",
          description: "Cozy reading nook with fireplace, perfect for evening relaxation",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
        }
      ]
    },
    {
      title: "Business & Connectivity",
      icon: <Home className="w-8 h-8" />,
      color: "bg-luxury-navy",
      amenities: [
        {
          name: "High-Speed WiFi",
          description: "Complimentary fiber-optic internet throughout the property",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        },
        {
          name: "Business Center",
          description: "Fully equipped workspace with printing, scanning, and meeting facilities",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
        },
        {
          name: "Conference Room",
          description: "Private meeting space for small groups with presentation equipment",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
        }
      ]
    },
    {
      title: "Concierge Services",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-luxury-gold",
      amenities: [
        {
          name: "Personal Concierge",
          description: "Dedicated staff to assist with reservations, tours, and local recommendations",
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        },
        {
          name: "Transportation Service",
          description: "Airport transfers and local shuttle service to nearby attractions",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
        },
        {
          name: "Housekeeping",
          description: "Daily housekeeping service with eco-friendly cleaning products",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-luxury-navy">
        <div className="text-center text-white space-y-4 px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold">
            Our <span className="text-luxury-gold">Amenities</span>
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            Discover the thoughtful services and facilities that make your stay exceptional
          </p>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Everything You Need
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From wellness facilities to business services, we've thoughtfully curated 
              every amenity to ensure your stay is both comfortable and memorable.
            </p>
          </div>

          {/* Amenity Categories */}
          <div className="space-y-20">
            {amenityCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} ref={addToRefs} className="opacity-0">
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-luxury-navy">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.amenities.map((amenity, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                      <img
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="font-playfair text-xl font-semibold text-luxury-navy mb-3">
                          {amenity.name}
                        </h4>
                        <p className="font-inter text-gray-600 leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl font-bold text-luxury-navy mb-6">
              Additional Services
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Extra touches that make your stay truly special
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0">
            {[
              {
                title: "24/7 Room Service",
                description: "Gourmet meals delivered to your room at any hour",
                icon: "🍽️"
              },
              {
                title: "Laundry Service",
                description: "Same-day laundry and dry cleaning available",
                icon: "👔"
              },
              {
                title: "Pet-Friendly",
                description: "Welcome your furry friends with special amenities",
                icon: "🐕"
              },
              {
                title: "Babysitting",
                description: "Professional childcare services upon request",
                icon: "👶"
              },
              {
                title: "Spa Treatments",
                description: "In-room massage and beauty treatments",
                icon: "💆"
              },
              {
                title: "Car Rental",
                description: "Convenient vehicle rental service on-site",
                icon: "🚗"
              },
              {
                title: "Tour Planning",
                description: "Customized local tours and excursions",
                icon: "🗺️"
              },
              {
                title: "Special Events",
                description: "Private dining and celebration planning",
                icon: "🎉"
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 bg-luxury-cream rounded-2xl hover-lift">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-lg font-semibold text-luxury-navy mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Hours & Policies */}
      <section className="py-20 bg-luxury-sage text-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-16 opacity-0">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-8">
                Hours & <span className="text-luxury-gold">Availability</span>
              </h2>
              <div className="space-y-6">
                {[
                  { service: "Restaurant", hours: "6:00 AM - 10:00 PM" },
                  { service: "Pool & Spa", hours: "5:00 AM - 11:00 PM" },
                  { service: "Fitness Center", hours: "24 Hours" },
                  { service: "Business Center", hours: "24 Hours" },
                  { service: "Concierge", hours: "7:00 AM - 10:00 PM" },
                  { service: "Room Service", hours: "24 Hours" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-inter font-medium">{item.service}</span>
                    <span className="font-inter text-luxury-gold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-4xl font-bold mb-8">
                Policies & <span className="text-luxury-gold">Guidelines</span>
              </h2>
              <div className="space-y-4 font-inter leading-relaxed">
                <p>
                  <strong className="text-luxury-gold">Check-in:</strong> 3:00 PM - 11:00 PM
                </p>
                <p>
                  <strong className="text-luxury-gold">Check-out:</strong> 12:00 PM
                </p>
                <p>
                  <strong className="text-luxury-gold">Cancellation:</strong> Free cancellation up to 24 hours before arrival
                </p>
                <p>
                  <strong className="text-luxury-gold">Pets:</strong> Welcome with advance notice and additional fee
                </p>
                <p>
                  <strong className="text-luxury-gold">Smoking:</strong> Non-smoking property with designated outdoor areas
                </p>
                <p>
                  <strong className="text-luxury-gold">Age Requirement:</strong> Guests must be 18 or older to check in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
