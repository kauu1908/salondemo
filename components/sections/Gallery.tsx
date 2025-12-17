import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../../constants';
import SectionHeading from '../ui/SectionHeading';
import { GalleryCategory, GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES: GalleryCategory[] = ['All', 'Interior', 'Hair', 'Grooming'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryItem) => {
    // Find index in the FULL list to ensure navigation works across filtered views if desired,
    // or strictly within filtered. Let's do within FULL list for better experience if user wants to see all.
    // Actually, UX is better if we only show filtered images in lightbox.
    const index = filteredImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="The Studio" 
          subtitle="A Glimpse Inside" 
        />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 border rounded-full ${
                activeCategory === cat 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => openLightbox(img)}
                className="relative overflow-hidden group bg-gray-100 cursor-pointer aspect-[4/3]"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <p className="text-white font-serif tracking-widest uppercase text-sm border-b border-white pb-1">View</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-2 hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img 
              key={filteredImages[currentImageIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              src={filteredImages[currentImageIndex].url}
              alt={filteredImages[currentImageIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-2 hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>
            
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-sm tracking-widest uppercase">
              {filteredImages[currentImageIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;