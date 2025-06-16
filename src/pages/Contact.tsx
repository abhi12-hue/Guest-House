
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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-luxury-navy">
        <div className="text-center text-white space-y-4 px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold">
            Contact <span className="text-luxury-gold">Us</span>
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help make your stay perfect. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={addToRefs} className="opacity-0">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="font-playfair text-3xl font-bold text-luxury-navy mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-inter font-medium text-luxury-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-inter font-medium text-luxury-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block font-inter font-medium text-luxury-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-inter font-medium text-luxury-navy mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
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
                    <label htmlFor="message" className="block font-inter font-medium text-luxury-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-4 text-lg rounded-full font-inter font-medium transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={addToRefs} className="space-y-8 opacity-0">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-luxury-navy mb-6">
                  Get in Touch
                </h2>
                <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're planning your stay, have questions about our amenities, 
                  or need assistance during your visit, our team is here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Address",
                    details: ["123 Serene Valley Road", "Mountain View, CA 94041"],
                    color: "bg-luxury-gold"
                  },
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Phone",
                    details: ["+1 (555) 123-4567", "Available 7 AM - 10 PM"],
                    color: "bg-luxury-sage"
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Email",
                    details: ["info@serenityguesthouse.com", "Response within 24 hours"],
                    color: "bg-luxury-navy"
                  },
                  {
                    icon: <Home className="w-6 h-6" />,
                    title: "Check-in Hours",
                    details: ["Monday - Sunday", "3:00 PM - 11:00 PM"],
                    color: "bg-luxury-gold"
                  }
                ].map((contact, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className={`${contact.color} rounded-full p-3 text-white`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-semibold text-luxury-navy mb-2">
                          {contact.title}
                        </h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="font-inter text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-luxury-navy text-white rounded-2xl p-6">
                <h3 className="font-playfair text-xl font-semibold mb-3">
                  24/7 Emergency Contact
                </h3>
                <p className="font-inter mb-2">
                  For urgent matters outside business hours:
                </p>
                <p className="font-inter text-luxury-gold font-semibold text-lg">
                  +1 (555) 911-HELP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={addToRefs} className="text-center mb-16 opacity-0">
            <h2 className="font-playfair text-4xl font-bold text-luxury-navy mb-6">
              Find Us
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of the serene valley, our guest house is easily accessible 
              yet perfectly secluded for your peaceful retreat.
            </p>
          </div>

          <div ref={addToRefs} className="opacity-0">
            <div className="bg-luxury-cream rounded-2xl p-8 text-center">
              <div className="w-full h-96 bg-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-luxury-gold mx-auto" />
                  <h3 className="font-playfair text-2xl font-semibold text-luxury-navy">
                    Interactive Map
                  </h3>
                  <p className="font-inter text-gray-600">
                    Google Maps integration would be embedded here
                  </p>
                  <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-6 py-3 rounded-full">
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
