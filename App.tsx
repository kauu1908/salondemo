import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChoose from './components/sections/WhyChoose';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import ContactCTA from './components/sections/ContactCTA';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const [bookingService, setBookingService] = useState<string | null>(null);

  useEffect(() => {
    console.log("Kaushik Salon App Loaded");
  }, []);

  const handleBookService = (serviceName: string) => {
    setBookingService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-black bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onBookService={handleBookService} />
        <WhyChoose />
        <Gallery />
        <Testimonials />
        <ContactCTA preselectedService={bookingService} />
      </main>
      <Footer />
    </div>
  );
};

export default App;