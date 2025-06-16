
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Calendar, MapPin, Home } from 'lucide-react';

const About = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
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
      <section className="relative h-96 flex items-center justify-center bg-luxury-navy">
        <div className="text-center text-white space-y-4 px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold">
            Our <span className="text-luxury-gold">Story</span>
          </h1>
          <p className="font-inter text-xl opacity-90">
            Discover the heart and soul behind Serenity Guest House
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={addToRefs} className="space-y-6 opacity-0">
              <h2 className="font-playfair text-4xl font-bold text-luxury-navy">
                A Vision of <span className="text-luxury-gold">Tranquility</span>
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Founded in 2018, Serenity Guest House was born from a simple yet profound vision: 
                to create a sanctuary where travelers could find not just accommodation, but a true 
                home away from home. Nestled in the picturesque valley, our guest house represents 
                the culmination of years of dreaming and careful planning.
              </p>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Our founders, Maria and James Peterson, traveled extensively around the world, 
                staying in countless hotels and guest houses. They noticed that while many offered 
                luxury, few provided the personal touch and genuine warmth that transforms a stay 
                from merely comfortable to truly memorable.
              </p>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Every detail at Serenity has been thoughtfully curated, from the locally sourced 
                artwork adorning our walls to the organic breakfast served each morning. We believe 
                that luxury lies not just in thread count or marble bathrooms, but in the genuine 
                care we show each guest.
              </p>
            </div>
            
            <div ref={addToRefs} className="opacity-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Founders of Serenity Guest House"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Our Core Values
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from the way we design our spaces 
              to how we interact with every guest who walks through our doors.
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Comfort First",
                description: "Every guest should feel completely at ease, with thoughtful amenities and spaces designed for relaxation and rejuvenation."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personal Service",
                description: "We believe in the power of human connection and strive to provide personalized experiences that exceed expectations."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Local Heritage",
                description: "We celebrate our local community by supporting local artisans, farmers, and businesses whenever possible."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Lasting Memories",
                description: "Our goal is to create experiences so special that our guests carry the memories with them long after they leave."
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4 bg-white p-8 rounded-2xl shadow-lg hover-lift">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-luxury-navy">
                  {value.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Meet Our Team
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              The heart of Serenity lies in our dedicated team of hospitality professionals 
              who are passionate about creating exceptional experiences.
            </p>
          </div>

          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0">
            {[
              {
                name: "Maria Peterson",
                role: "Co-Founder & General Manager",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                bio: "With over 15 years in luxury hospitality, Maria ensures every detail meets our exacting standards."
              },
              {
                name: "James Peterson",
                role: "Co-Founder & Operations Director",
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
                bio: "James brings his background in architecture and design to create beautiful, functional spaces."
              },
              {
                name: "Sophie Chen",
                role: "Guest Relations Manager",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
                bio: "Sophie's warm personality and attention to detail ensure every guest feels truly welcomed."
              }
            ].map((member, index) => (
              <div key={index} className="text-center space-y-4 bg-luxury-cream p-8 rounded-2xl hover-lift">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-luxury-navy">
                    {member.name}
                  </h3>
                  <p className="font-inter text-luxury-gold font-medium">
                    {member.role}
                  </p>
                </div>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-luxury-sage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={addToRefs} className="opacity-0">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Sustainable practices at Serenity"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div ref={addToRefs} className="space-y-6 text-white opacity-0">
              <h2 className="font-playfair text-4xl font-bold">
                Our Commitment to <span className="text-luxury-gold">Sustainability</span>
              </h2>
              <p className="font-inter text-lg leading-relaxed">
                At Serenity Guest House, we believe luxury and environmental responsibility 
                go hand in hand. Our sustainability initiatives include:
              </p>
              <ul className="space-y-3 font-inter">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>Solar-powered energy systems throughout the property</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>Locally sourced organic breakfast ingredients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>Water conservation systems and natural cleaning products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span>Partnership with local conservation organizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
