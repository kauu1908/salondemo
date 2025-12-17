import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { SERVICES } from '../../constants';
import { Service } from '../../types';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookNow = () => {
    if (selectedService) {
      onBookService(selectedService.title);
      handleCloseModal();
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Our Services" 
          subtitle="Curated for Perfection" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleServiceClick(service)}
              className="group bg-white p-8 md:p-10 border border-gray-100 hover:border-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer relative"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-serif text-xl font-bold text-black group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {service.description}
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                 <span className="font-medium text-sm tracking-wide text-gray-900">
                  {service.price}
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors underline decoration-transparent group-hover:decoration-black underline-offset-4">
                  Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-light italic">
            "Beauty is about enhancing what you have. Let yourself shine through."
          </p>
          <a href="#contact" className="inline-block border-b border-black pb-1 text-sm font-medium uppercase tracking-widest hover:text-gray-600 transition-colors">
            View Full Menu PDF
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal 
        isOpen={!!selectedService} 
        onClose={handleCloseModal}
        title={selectedService?.title}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                <Clock size={14} /> {selectedService.duration}
              </span>
              <span className="font-medium text-black">{selectedService.price}</span>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              {selectedService.description}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wide mb-2">Service Includes:</h4>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Check size={16} className="text-black mt-0.5" />
                <span>Professional Consultation</span>
              </div>
               <div className="flex items-start gap-2 text-sm text-gray-600">
                <Check size={16} className="text-black mt-0.5" />
                <span>Premium Products Usage</span>
              </div>
               <div className="flex items-start gap-2 text-sm text-gray-600">
                <Check size={16} className="text-black mt-0.5" />
                <span>Post-service styling advice</span>
              </div>
            </div>

            <Button fullWidth onClick={handleBookNow}>
              Book This Service
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;