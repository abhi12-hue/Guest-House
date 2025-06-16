import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
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
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 flex items-center justify-center bg-[#1A2A44] text-white">
        <div className="text-center space-y-4 px-4 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Contact <span className="text-[#D4A373]">Us</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Our team is ready to make your stay unforgettable. Reach out today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-20 bg-[#F5F0E6]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div ref={addToRefs} className="opacity-0">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2A44] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="general">General Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="special">Special Requests</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans font-medium text-[#1A2A44] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4A373] hover:bg-[#C89B66] text-white px-8 py-4 text-lg rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={addToRefs} className="space-y-8 opacity-0">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2A44] mb-6">
                  Get in Touch
                </h2>
                <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  Have questions about your stay or need help with amenities? Our team is here for you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Address",
                    details: ["Main Market Someshwar", "Almora Uttarakhand"],
                    color: "bg-[#D4A373]"
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Phone",
                    details: ["8923519805", "Available 7 AM - 10 PM"],
                    color: "bg-[#6B7280]"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Email",
                    details: ["245boraneeraj@gmail.com", "Response within 24 hours"],
                    color: "bg-[#1A2A44]"
                  },
                  {
                    icon: <Home className="w-6 h-6" />,
                    title: "Check-in Hours",
                    details: ["Monday - Sunday", "12:00 PM - 12:00 PM"],
                    color: "bg-[#D4A373]"
                  }
                ].map((contact, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className={`${contact.color} rounded-full p-3 text-white`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-[#1A2A44] mb-2">
                          {contact.title}
                        </h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="font-sans text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-[#1A2A44] text-white rounded-2xl p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">
                  24/7 Emergency Contact
                </h3>
                <p className="font-sans mb-2">
                  For urgent matters outside business hours:
                </p>
                <p className="font-sans text-[#D4A373] font-semibold text-lg">
                  8923519805 , 7302644277
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center mb-12 sm:mb-16 opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A2A44] mb-6">
              Find Us
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Nestled in the serene valley, our guest house offers peace and easy access.
            </p>
          </div>

          <div ref={addToRefs} className="opacity-0">
            <div className="bg-[#F5F0E6] rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-full h-80 sm:h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-12 sm:w-16 h-12 sm:h-16 text-[#D4A373] mx-auto" />
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A2A44]">
                    Interactive Map
                  </h3>
                  <p className="font-sans text-gray-600">
                    Google Maps integration would be embedded here
                  </p>
                  <Button className="bg-[#D4A373] hover:bg-[#C89B66] text-white px-6 py-3 rounded-full">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;