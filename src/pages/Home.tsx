
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomCarousel from '@/components/RoomCarousel';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Simple scroll animations without GSAP
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

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center text-white space-y-8 px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Welcome to <span className="text-luxury-gold">Serenity</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl leading-relaxed opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Experience luxury and tranquility in our carefully curated guest house, 
            where every moment is designed for your perfect escape.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/booking">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-4 text-lg rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 hover-lift">
                Book Your Stay
              </Button>
            </Link>
            <Link to="/rooms">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-luxury-navy px-8 py-4 text-lg rounded-full font-inter font-medium transition-all duration-300 hover:scale-105">
                Explore Rooms
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Featured Accommodations
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our thoughtfully designed rooms and suites, each offering a unique blend of comfort, 
              elegance, and modern amenities for an unforgettable stay.
            </p>
          </div>
          
          <div ref={addToRefs} className="opacity-0">
            <RoomCarousel />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={addToRefs} className="space-y-6 opacity-0">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy">
                Your Home Away From <span className="text-luxury-gold">Home</span>
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Nestled in the heart of tranquil surroundings, Serenity Guest House offers an 
                intimate retreat where luxury meets comfort. Our commitment to exceptional 
                hospitality ensures every guest experiences the perfect blend of relaxation and refinement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-luxury-navy">Prime Location</h3>
                  <p className="text-gray-600 text-sm">Serene valley setting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-sage rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-luxury-navy">24/7 Service</h3>
                  <p className="text-gray-600 text-sm">Always here for you</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-luxury-navy">Personal Touch</h3>
                  <p className="text-gray-600 text-sm">Tailored experiences</p>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-luxury-navy hover:bg-luxury-navy-dark text-white px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div ref={addToRefs} className="opacity-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Serenity Guest House Exterior"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              What Our Guests Say
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the warmth of our hospitality through the words of our valued guests.
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0">
            {[
              {
                name: "Sarah Johnson",
                location: "San Francisco, CA",
                review: "An absolutely magical experience! The attention to detail and warm hospitality made our anniversary getaway truly unforgettable.",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Seattle, WA",
                review: "The perfect blend of luxury and comfort. Every moment at Serenity was peaceful and rejuvenating. Highly recommended!",
                rating: 5
              },
              {
                name: "Emma Williams",
                location: "Portland, OR",
                review: "From the beautiful rooms to the exceptional service, everything exceeded our expectations. We can't wait to return!",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex text-luxury-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                <div>
                  <h4 className="font-playfair font-semibold text-luxury-navy">{review.name}</h4>
                  <p className="text-luxury-sage text-sm">{review.location}</p>
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
