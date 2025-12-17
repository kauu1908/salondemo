import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Brand */}
          <div className="text-left">
            <h3 className="font-serif text-3xl font-bold mb-4">KAUSHIK.</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Premium grooming for the modern individual. Quality, hygiene, and style in every cut.
            </p>
          </div>

          {/* Info */}
          <div className="text-left md:text-right">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-300">Visit Us</h4>
            <p className="text-gray-500 text-sm mb-1">123, Luxury Lane, Urban District</p>
            <p className="text-gray-500 text-sm">New Delhi, India 110001</p>
          </div>

          {/* Hours */}
          <div className="text-left md:text-right">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-300">Hours</h4>
            <p className="text-gray-500 text-sm mb-1">Tue - Sun: 10:00 AM - 9:00 PM</p>
            <p className="text-gray-500 text-sm">Mon: Closed</p>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Kaushik Salon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;