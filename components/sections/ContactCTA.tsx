import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { SERVICES } from '../../constants';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

interface ContactCTAProps {
  preselectedService: string | null;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Enter a valid 10-digit number';
    
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call or process
    setTimeout(() => {
      // Construct WhatsApp URL
      const text = `Hi Kaushik Salon, I would like to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date} ${formData.time ? `at ${formData.time}` : ''}%0A*Message:* ${formData.message}`;
      const waUrl = `https://wa.me/919876543210?text=${text}`;
      
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      
      // Optional: Reset form or show success message on UI
      alert('Redirecting to WhatsApp to confirm your booking!');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/3 text-left">
            <h2 className="font-serif text-4xl font-bold mb-6 text-black">
              Visit Us
            </h2>
            <p className="text-gray-500 mb-10 text-lg font-light">
              Experience the art of grooming in a setting defined by luxury and precision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-black shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Location</h4>
                  <a 
                    href="https://maps.google.com/?q=New+Delhi" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    123, Luxury Lane, Urban District<br/>New Delhi, India 110001
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-black shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Contact</h4>
                  <a href="tel:+919876543210" className="block text-gray-600 hover:text-black transition-colors">+91 98765 43210</a>
                  <a href="https://wa.me/919876543210" className="block text-gray-600 hover:text-black transition-colors mt-1">WhatsApp Us</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="text-black shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Hours</h4>
                  <p className="text-gray-600">Tue - Sun: 10:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Side */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-lg">
             <h3 className="font-serif text-2xl font-bold mb-8">Request an Appointment</h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <input 
                    id="booking-name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *" 
                    className={`w-full p-4 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-1 focus:ring-black outline-none transition-all`}
                   />
                   {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                 </div>
                 
                 <div>
                   <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *" 
                    className={`w-full p-4 bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-1 focus:ring-black outline-none transition-all`}
                   />
                   {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full p-4 bg-white border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-1 focus:ring-black outline-none transition-all appearance-none`}
                   >
                     <option value="" disabled>Select Service *</option>
                     {SERVICES.map(s => (
                       <option key={s.id} value={s.title}>{s.title}</option>
                     ))}
                   </select>
                   {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                 </div>

                 <div className="flex gap-4">
                   <div className="w-2/3">
                     <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full p-4 bg-white border ${errors.date ? 'border-red-500' : 'border-gray-200'} focus:border-black focus:ring-1 focus:ring-black outline-none transition-all`}
                     />
                     {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                   </div>
                   <div className="w-1/3">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all appearance-none"
                      >
                        <option value="">Time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                   </div>
                 </div>
               </div>

               <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests? (Optional)" 
                rows={3}
                className="w-full p-4 bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
               />

               <Button 
                type="submit" 
                fullWidth 
                disabled={isSubmitting}
                className={isSubmitting ? 'opacity-70 cursor-wait' : ''}
               >
                 {isSubmitting ? 'Processing...' : 'Confirm Request via WhatsApp'}
               </Button>
               <p className="text-xs text-center text-gray-400 mt-4">
                 By booking, you agree to our salon hygiene and cancellation policies.
               </p>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;