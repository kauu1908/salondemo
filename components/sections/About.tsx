import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                title="The Philosophy" 
                subtitle="About Kaushik" 
                alignment="left" 
              />
              <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                <p className="mb-6">
                  Founded on the belief that grooming is an essential ritual, Kaushik was established to provide a sanctuary for those who appreciate quality. We aren't just a salon; we are a retreat from the urban chaos.
                </p>
                <p className="mb-6">
                  Our approach is simple: precise techniques, premium products, and an unhurried environment. Whether it's a classic cut or a complete style overhaul, our stylists are trained to listen, advise, and execute with perfection.
                </p>
                <p>
                  We strip away the unnecessary noise and focus on what matters—hygiene, skill, and your confidence.
                </p>
              </div>
              
              <div className="mt-8 flex gap-8">
                <div>
                  <h4 className="font-serif text-3xl font-bold">5+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Years Exp</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold">2k+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://picsum.photos/seed/barberchair/800/1000?grayscale" 
                  alt="Salon Atmosphere" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-black hidden md:block" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;