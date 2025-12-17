import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../../constants';
import SectionHeading from '../ui/SectionHeading';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualNav = (index: number) => {
    setActiveIndex(index);
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Client Stories" 
          subtitle="Trusted by Many" 
        />

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slider Area */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center p-8 md:p-12 bg-white border border-gray-100 shadow-sm w-full"
              >
                <Quote size={40} className="text-gray-200 mb-6" />
                <p className="text-gray-700 text-lg md:text-xl italic mb-8 font-light leading-relaxed max-w-2xl">
                  "{TESTIMONIALS[activeIndex].content}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-serif font-bold text-xl text-black">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  {TESTIMONIALS[activeIndex].role && (
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows (Desktop) */}
            <button 
              onClick={prev}
              className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors hidden md:block"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={next}
              className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors hidden md:block"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;