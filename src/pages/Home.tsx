
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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30,58,95,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(212,175,55,0.3) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxury-sage/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="text-center text-white space-y-8 px-4 max-w-5xl mx-auto relative z-10">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-luxury-gold text-sm font-inter font-medium tracking-wider uppercase mb-4 block animate-fade-in">
                Luxury • Tranquility • Excellence
              </span>
            </div>
            
            <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-tight animate-fade-in">
              Welcome to <br />
              <span className="text-luxury-gold relative">
                Serenity
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards] origin-left"></div>
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl leading-relaxed opacity-90 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Where luxury meets serenity. Experience unparalleled comfort in our meticulously crafted guest house, 
              designed for those who appreciate the finer things in life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/booking">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-10 py-4 text-lg rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105 hover-lift shadow-xl">
                Reserve Your Stay
                <span className="ml-2">→</span>
              </Button>
            </Link>
            <Link to="/rooms">
              <Button variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-luxury-navy px-10 py-4 text-lg rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Explore Accommodations
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 mt-12 opacity-80 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-luxury-gold fill-current" />
              <span className="text-sm font-inter">5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-luxury-gold" />
              <span className="text-sm font-inter">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-luxury-gold" />
              <span className="text-sm font-inter">Premium Service</span>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-inter tracking-wider opacity-80">DISCOVER MORE</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Rooms Section */}
      <section className="py-24 bg-gradient-to-b from-luxury-cream to-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-20 opacity-0">
            <span className="text-luxury-gold text-sm font-inter font-medium tracking-wider uppercase mb-4 block">
              Luxury Accommodations
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-navy mb-8">
              Exquisite <span className="text-luxury-gold">Rooms & Suites</span>
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each room is thoughtfully designed to provide an unparalleled experience of comfort and elegance, 
              featuring premium amenities and breathtaking views.
            </p>
          </div>
          
          <div ref={addToRefs} className="opacity-0">
            <RoomCarousel />
          </div>
          
          <div ref={addToRefs} className="text-center mt-16 opacity-0">
            <Link to="/rooms">
              <Button className="bg-luxury-navy hover:bg-luxury-navy-dark text-white px-8 py-4 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                View All Accommodations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={addToRefs} className="space-y-8 opacity-0">
              <div>
                <span className="text-luxury-gold text-sm font-inter font-medium tracking-wider uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-navy leading-tight">
                  Your Sanctuary of <span className="text-luxury-gold">Luxury</span>
                </h2>
                <div className="w-20 h-1 bg-luxury-gold mt-6"></div>
              </div>
              
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Nestled in a pristine natural setting, Serenity Guest House represents the pinnacle of 
                hospitality excellence. Our commitment to creating unforgettable experiences is reflected 
                in every carefully curated detail.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-luxury-navy text-lg mb-2">Prime Location</h3>
                  <p className="text-gray-600 text-sm">Breathtaking valley views</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-sage to-luxury-sage-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-luxury-navy text-lg mb-2">Concierge Service</h3>
                  <p className="text-gray-600 text-sm">24/7 personalized attention</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-luxury-navy text-lg mb-2">Bespoke Experiences</h3>
                  <p className="text-gray-600 text-sm">Tailored to perfection</p>
                </div>
              </div>
              
              <Link to="/about">
                <Button className="bg-luxury-navy hover:bg-luxury-navy-dark text-white px-8 py-4 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  Discover Our Heritage
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
            
            <div ref={addToRefs} className="opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-luxury-gold/20 to-luxury-sage/20 rounded-3xl blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Serenity Guest House Exterior"
                  className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Guest Reviews Section */}
      <section className="py-24 bg-gradient-to-b from-luxury-cream to-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-20 opacity-0">
            <span className="text-luxury-gold text-sm font-inter font-medium tracking-wider uppercase mb-4 block">
              Guest Testimonials
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-luxury-navy mb-8">
              Cherished <span className="text-luxury-gold">Memories</span>
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Discover why our guests return time and again to experience the magic of Serenity.
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0">
            {[
              {
                name: "Sarah Johnson",
                location: "San Francisco, CA",
                review: "An absolutely transcendent experience. Every detail was perfection, from the impeccable service to the breathtaking surroundings. This is luxury redefined.",
                rating: 5,
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                location: "Seattle, WA", 
                review: "Serenity exceeded every expectation. The attention to detail, the warmth of the staff, and the exquisite amenities created memories we'll treasure forever.",
                rating: 5,
                avatar: "MC"
              },
              {
                name: "Emma Williams",
                location: "Portland, OR",
                review: "A masterpiece of hospitality. From arrival to departure, every moment was carefully orchestrated to create the perfect retreat experience.",
                rating: 5,
                avatar: "EW"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover-lift border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="flex text-luxury-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-8 leading-relaxed text-lg font-inter">
                  "{review.review}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <span className="text-white font-playfair font-semibold">{review.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-luxury-navy text-lg">{review.name}</h4>
                    <p className="text-luxury-sage text-sm">{review.location}</p>
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
