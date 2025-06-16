import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    specialRequests: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'checkOut' && bookingData.checkIn && value <= bookingData.checkIn) {
      toast({
        title: "Invalid Date",
        description: "Check-out date must be after check-in date.",
        variant: "destructive"
      });
      return;
    }
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (calculateNights() <= 0) {
      toast({
        title: "Invalid Dates",
        description: "Please select valid check-in and check-out dates.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      toast({
        title: "Booking Request Submitted!",
        description: "We'll confirm your reservation within 2 hours. A confirmation email has been sent.",
      });
      setBookingData({
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: '',
        specialRequests: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const roomOptions = [
    { value: 'deluxe-garden', label: 'Deluxe Garden Suite - $299/night', price: 299 },
    { value: 'mountain-view', label: 'Mountain View Room - $199/night', price: 199 },
    { value: 'romantic-hideaway', label: 'Romantic Hideaway - $349/night', price: 349 }
  ];

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return dayDiff > 0 ? dayDiff : 0;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const selectedRoom = roomOptions.find(room => room.value === bookingData.roomType);
    const roomPrice = selectedRoom ? selectedRoom.price : 0;
    return nights * roomPrice;
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
            Book Your <span className="text-[#D4A373]">Stay</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Reserve your perfect retreat at Serenity Guest House
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 sm:py-20 bg-[#F5F0E6]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div ref={addToRefs} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl opacity-0">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2A44] mb-8">
                  Reservation Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  {/* Dates and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="checkIn" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Check-in Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A373]" />
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={bookingData.checkIn}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="checkOut" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Check-out Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A373]" />
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={bookingData.checkOut}
                          onChange={handleInputChange}
                          required
                          min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block font-sans font-medium text-[#1A2A44] mb-2">
                        Guests *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A373]" />
                        <select
                          id="guests"
                          name="guests"
                          value={bookingData.guests}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div>
                    <label htmlFor="roomType" className="block font-sans font-medium text-[#1A2A44] mb-2">
                      Room Type *
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={bookingData.roomType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a room type</option>
                      {roomOptions.map((room) => (
                        <option key={room.value} value={room.value}>
                          {room.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="specialRequests" className="block font-sans font-medium text-[#1A2A44] mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                      placeholder="Any special requests or dietary requirements..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4A373] hover:bg-[#C89B66] text-white px-8 py-4 text-base sm:text-lg rounded-full font-sans font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                  >
                    {isSubmitting ? 'Processing Reservation...' : 'Reserve Now'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div ref={addToRefs} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg sticky top-8 opacity-0">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A2A44] mb-6">
                  Booking Summary
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-sans text-gray-600">Check-in</span>
                    <span className="font-sans font-medium text-[#1A2A44]">
                      {bookingData.checkIn || 'Select date'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-sans text-gray-600">Check-out</span>
                    <span className="font-sans font-medium text-[#1A2A44]">
                      {bookingData.checkOut || 'Select date'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-sans text-gray-600">Guests</span>
                    <span className="font-sans font-medium text-[#1A2A44]">
                      {bookingData.guests} {parseInt(bookingData.guests) === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-sans text-gray-600">Nights</span>
                    <span className="font-sans font-medium text-[#1A2A44]">
                      {calculateNights()} {calculateNights() === 1 ? 'Night' : 'Nights'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-sans text-gray-600">Room</span>
                    <span className="font-sans font-medium text-[#1A2A44]">
                      {bookingData.roomType ? roomOptions.find(r => r.value === bookingData.roomType)?.label.split(' - ')[0] : 'Select room'}
                    </span>
                  </div>
                </div>

                {calculateTotal() > 0 && (
                  <div className="bg-[#F5F0E6] p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-base sm:text-lg font-semibold text-[#1A2A44]">
                        Total
                      </span>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#D4A373]">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      *Taxes and fees will be calculated at checkout
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#D4A373]" />
                    <span>Free cancellation up to 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#D4A373]" />
                    <span>Confirmation within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#D4A373]" />
                    <span>24/7 guest support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={addToRefs} className="text-center opacity-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A2A44] mb-6">
              Need Help with Your Booking?
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our reservation specialists are available to assist you with any questions 
              or special arrangements for your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#1A2A44] hover:bg-[#0F1A2F] text-white px-6 sm:px-8 py-3 rounded-full font-sans font-medium transition-all duration-300 hover-lift">
                Call 
              </Button>
              <Button 
                variant="outline" 
                className="border-[#1A2A44] text-[#1A2A44] hover:bg-[#1A2A44] hover:text-white px-6 sm:px-8 py-3 rounded-full font-sans font-medium transition-all duration-300 hover-lift"
              >
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;