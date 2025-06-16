import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, MapPin, Home, ShowerHead, Brush, Map, ShoppingBag, Bus, Utensils } from 'lucide-react';

const Amenities = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure useEffect runs only on the client
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const amenityCategories = [
    {
      title: 'Wellness & Recreation',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-[#D4A373]',
      amenities: [
        {
          name: 'Outdoor Pool & Spa',
          description: 'Heated infinity pool with mountain views and therapeutic spa treatments',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        },
        {
          name: 'Fitness Center',
          description: 'Fully equipped gym with modern equipment and personal training services',
          image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
        },
        {
          name: 'Meditation Garden',
          description: 'Tranquil outdoor space designed for relaxation and mindfulness practices',
          image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        },
      ],
    },
    {
      title: 'Dining & Entertainment',
      icon: <Calendar className="w-8 h-8" />,
      color: 'bg-[#6B7280]',
      amenities: [
        {
          name: 'Gourmet Restaurant',
          description: 'Farm-to-table cuisine featuring locally sourced ingredients and seasonal menus',
          image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        },
        {
          name: 'Wine Cellar & Tasting',
          description: 'Curated selection of regional wines with guided tasting experiences',
          image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        },
        {
          name: 'Library Lounge',
          description: 'Cozy reading nook with fireplace, perfect for evening relaxation',
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
        },
      ],
    },
    {
      title: 'Business & Connectivity',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-[#1A2A44]',
      amenities: [
        {
          name: 'High-Speed WiFi',
          description: 'Complimentary fiber-optic internet throughout the property',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        },
        {
          name: 'Business Center',
          description: 'Fully equipped workspace with printing, scanning, and meeting facilities',
          image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
        },
        {
          name: 'Conference Room',
          description: 'Private meeting space for small groups with presentation equipment',
          image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        },
      ],
    },
    {
      title: 'Concierge Services',
      icon: <MapPin className="w-8 h-8" />,
      color: 'bg-[#D4A373]',
      amenities: [
        {
          name: 'Personal Concierge',
          description: 'Dedicated staff to assist with reservations, tours, and local recommendations',
          image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        },
        {
          name: 'Transportation Service',
          description: 'Airport transfers and local shuttle service to nearby attractions',
          image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        },
        {
          name: 'Housekeeping',
          description: 'Daily housekeeping service with eco-friendly cleaning products',
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
        },
      ],
    },
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
            Our <span className="text-[#D4A373]">Amenities</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover the thoughtful services and facilities that make your stay exceptional
          </p>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-16 sm:py-20 bg-[#F5F0E6]">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16 opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2A44] mb-6">
              Everything You Need
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From wellness facilities to business services, we've thoughtfully curated every amenity to ensure your stay is both comfortable and memorable.
            </p>
          </div>

          {/* Amenity Categories */}
          <div className="space-y-16 sm:space-y-20">
            {amenityCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} ref={addToRefs} className="opacity-0">
                <div className="text-center mb-10 sm:mb-12">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2A44]">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.amenities.map((amenity, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                      <img src={amenity.image} alt={amenity.name} className="w-full h-40 sm:h-48 object-cover" />
                      <div className="p-4 sm:p-6">
                        <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#1A2A44] mb-3">
                          {amenity.name}
                        </h4>
                        <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16 opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A2A44] mb-6">
              Additional Services
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Extra touches that make your stay truly special
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 opacity-0">
            {[
              {
                title: 'Free Bathroom Amenities',
                description: 'Complimentary toiletries and daily bathroom refresh',
                icon: <ShowerHead className="w-10 h-10 text-[#D4A373]" />,
              },
              {
                title: 'Clean Room Service',
                description: 'Daily housekeeping to ensure a spotless stay',
                icon: <Brush className="w-10 h-10 text-[#D4A373]" />,
              },
              {
                title: 'Mountain View Access',
                description: 'Stunning mountain vistas from select rooms and areas',
                icon: <Map className="w-10 h-10 text-[#D4A373]" />,
              },
              {
                title: 'On-Site Restaurant',
                description: 'Savor local and gourmet dishes at our restaurant',
                icon: <Utensils className="w-10 h-10 text-[#D4A373]" />,
              },
              {
                title: 'Nearby Market Access',
                description: 'Explore local markets just steps away',
                icon: <ShoppingBag className="w-10 h-10 text-[#D4A373]" />,
              },
              {
                title: 'Bus Station Proximity',
                description: 'Convenient access to nearby bus stations',
                icon: <Bus className="w-10 h-10 text-[#D4A373]" />,
              },
              {
                title: 'Tourist Base Support',
                description: 'Guided tours and local attraction planning',
                icon: <Map className="w-10 h-10 text-[#D4A373]" />,
              },
            ].map((service, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-[#F5F0E6] rounded-2xl hover-lift">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A2A44] mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Hours & Policies */}
      <section className="py-16 sm:py-20 bg-[#6B7280] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 opacity-0">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8">
                Hours & <span className="text-[#D4A373]">Availability</span>
              </h2>
              <div className="space-y-6">
                {[
                  { service: 'Restaurant', hours: '6:00 AM - 10:00 PM' },
                  { service: 'Pool & Spa', hours: '5:00 AM - 11:00 PM' },
                  { service: 'Fitness Center', hours: '24 Hours' },
                  { service: 'Business Center', hours: '24 Hours' },
                  { service: 'Concierge', hours: '7:00 AM - 10:00 PM' },
                  { service: 'Room Service', hours: '24 Hours' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-sans font-medium">{item.service}</span>
                    <span className="font-sans text-[#D4A373]">{item.hours}</span>
                  </div>
                ))}
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