
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Somanth</h3>
                <p className="text-sm text-luxury-gold -mt-1">Guest House</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience luxury and comfort in our tranquil guest house, where every detail is crafted for your perfect stay.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg text-luxury-gold">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                About Us
              </Link>
              <Link to="/rooms" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Rooms
              </Link>
              <Link to="/amenities" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Amenities
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg text-luxury-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Main Market Someshwar</p>
                  <p className="text-gray-300">Almora Uttarkhand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <p className="text-gray-300">8923519805 , 7302644277</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-luxury-gold flex-shrink-0">@</span>
                <p className="text-gray-300">245boraneeraj@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg text-luxury-gold">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-luxury-navy-light border border-luxury-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold transition-colors duration-300"
              />
              <button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white px-4 py-2 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-gold/30 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Somanth Guest House. All rights reserved. Crafted with care for your comfort.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
