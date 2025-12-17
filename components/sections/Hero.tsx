import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus the name input after scroll completes
      setTimeout(() => {
        document.getElementById('booking-name')?.focus();
      }, 800);
    }
  };

  const handleServicesClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/salonhero/1920/1080?grayscale" 
          alt="Kaushik Salon Interior" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-sans font-medium tracking-[0.2em] uppercase mb-4 opacity-90">
            Est. 2024 • Premium Grooming
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Kaushik<span className="text-gray-400">.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Precision grooming. Clean aesthetics. Professional care. <br className="hidden md:block"/>
            Elevate your personal style in an environment designed for you.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="white" onClick={handleBookClick} className="hover:scale-105 transition-transform">
              Book Appointment
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" onClick={handleServicesClick}>
              View Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;