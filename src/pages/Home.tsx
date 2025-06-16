import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomCarousel from '@/components/RoomCarousel';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Star, Award, Shield } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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
          @keyframes scale-x {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}
      </style>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[80vh] sm:h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30,58,95,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(212,175,55,0.3) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#D4A373]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#6B7280]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="text-center text-white space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="text-[#D4A373] text-xs sm:text-sm font-sans font-medium tracking-wider uppercase mb-4 block animate-fade-in">
                Luxury • Tranquility • Excellence
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold leading-tight animate-fade-in">
              Welcome to <br />
              <span className="text-[#D4A373] relative">
                Somnath Guest House
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D4A373] to-[#E8C595] transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards] origin-left"></div>
              </span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed opacity-90 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Where luxury meets serenity. Experience unparalleled comfort in our meticulously crafted guest house, 
              designed for those who appreciate the finer things in life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/booking">
              <Button className="bg-[#D4A373] hover:bg-[#C89B66] text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full font-sans font-semibold transition-all duration-300 hover:scale-105 hover-lift shadow-xl">
                Reserve Your Stay
                <span className="ml-2">→</span>
              </Button>
            </Link>
            <Link to="/rooms">
              <Button 
                variant="outline" 
                className="border-2 border-white/80 text-white hover:bg-white hover:text-[#1A2A44] px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 hover-lift backdrop-blur-sm"
              >
                Explore Accommodations
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 sm:mt-12 opacity-80 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center space-x-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4A373] fill-current" />
              <span className="text-xs sm:text-sm font-sans">Mountain View</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4A373]" />
              <span className="text-xs sm:text-sm font-sans">Market</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4A373]" />
              <span className="text-xs sm:text-sm font-sans">Premium Service</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-sans tracking-wider opacity-80">DISCOVER MORE</span>
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F0E6] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-20 opacity-0">
            <span className="text-[#D4A373] text-xs sm:text-sm font-sans font-medium tracking-wider uppercase mb-4 block">
              Luxury Accommodations
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A2A44] mb-6 sm:mb-8">
              Exquisite <span className="text-[#D4A373]">Rooms & Suites</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D4A373] mx-auto mb-6 sm:mb-8"></div>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each room is thoughtfully designed to provide an unparalleled experience of comfort and elegance, 
              featuring premium amenities and breathtaking views.
            </p>
          </div>
          
          <div ref={addToRefs} className="opacity-0">
            <RoomCarousel />
          </div>
          
          <div ref={addToRefs} className="text-center mt-12 sm:mt-16 opacity-0">
            <Link to="/rooms">
              <Button className="bg-[#1A2A44] hover:bg-[#0F1A2F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 hover-lift shadow-lg">
                View All Accommodations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={addToRefs} className="space-y-6 sm:space-y-8 opacity-0">
              <div>
                <span className="text-[#D4A373] text-xs sm:text-sm font-sans font-medium tracking-wider uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A2A44] leading-tight">
                  Your Sanctuary of <span className="text-[#D4A373]">Luxury</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-[#D4A373] mt-4 sm:mt-6"></div>
              </div>
              
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
               
Tucked away in the serene hills of Someshwar, Almora, our guest house embodies the essence of tranquil hospitality. Surrounded by mountain fresh air, every detail is thoughtfully crafted to ensure an unforgettable experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8">
                <div className="text-center group">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#D4A373] to-[#E8C595] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A2A44] text-base sm:text-lg mb-2">Prime Location</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Breathtaking valley views</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#6B7280] to-[#A1A8B0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calendar className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A2A44] text-base sm:text-lg mb-2">Concierge Service</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">24/7 personalized attention</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#D4A373] to-[#E8C595] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#1A2A44] text-base sm:text-lg mb-2">Bespoke Experiences</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Tailored to perfection</p>
                </div>
              </div>
              
              <Link to="/about">
                <Button className="bg-[#1A2A44] hover:bg-[#0F1A2F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 hover-lift shadow-lg">
                  Discover Our Heritage
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
            
            <div ref={addToRefs} className="opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4A373]/20 to-[#6B7280]/20 rounded-3xl blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Serenity Guest House Exterior"
                  className="relative rounded-2xl shadow-xl w-full h-80 sm:h-96 lg:h-[500px] object-cover hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F0E6] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-20 opacity-0">
            <span className="text-[#D4A373] text-xs sm:text-sm font-sans font-medium tracking-wider uppercase mb-4 block">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A2A44] mb-6 sm:mb-8">
              Cherished <span className="text-[#D4A373]">Memories</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D4A373] mx-auto mb-6 sm:mb-8"></div>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
              Discover why our guests return time and again to experience the magic of Serenity.
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 opacity-0">
            {[
              {
                name: "Abhishek Bisht",
                location: "Guest", 
                review: "An absolutely transcendent experience. Every detail was perfection, from the impeccable service to the breathtaking surroundings. This is luxury redefined.",
                rating: 5,
                avatar: "AB"
              },
              {
                name: "Milan Singh",
                 location: "Guest", 
                review: "Serenity exceeded every expectation. The attention to detail, the warmth of the staff, and the exquisite amenities created memories we'll treasure forever.",
                rating: 5,
                avatar: "Ms"
              },
              {
                name: "Aman",
                 location: "Guest", 
                review: "A masterpiece of hospitality. From arrival to departure, every moment was carefully orchestrated to create the perfect retreat experience.",
                rating: 5,
                avatar: "AS"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover-lift border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#D4A373]/10 to-transparent rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                
                <div className="flex text-[#D4A373] mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-sans">
                  "{review.review}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#D4A373] to-[#E8C595] rounded-full flex items-center justify-center">
                    <span className="text-white font-serif font-semibold text-sm sm:text-base">{review.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1A2A44] text-base sm:text-lg">{review.name}</h4>
                    <p className="text-[#6B7280] text-xs sm:text-sm">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;