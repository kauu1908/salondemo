import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple ScrollSpy Logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is approximately in view (top 1/3 of screen)
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className={`font-serif text-2xl font-bold tracking-tighter z-50 transition-colors ${
          (isScrolled || isOpen) ? 'text-black' : 'text-white'
        }`}>
          KAUSHIK<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-widest uppercase transition-all hover:opacity-70 relative ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className={`absolute -bottom-2 left-0 right-0 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`} />
                )}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`px-5 py-2 text-xs font-bold tracking-widest uppercase border transition-all ${
              isScrolled 
                ? 'border-black text-black hover:bg-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 p-2 focus:outline-none transition-colors ${
             (isScrolled || isOpen) ? 'text-black' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />} 
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className={`text-2xl font-serif text-black hover:text-gray-600 transition-colors ${
               activeSection === link.href.substring(1) ? 'font-bold' : ''
            }`}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="px-8 py-3 bg-black text-white text-sm tracking-widest uppercase mt-4"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;