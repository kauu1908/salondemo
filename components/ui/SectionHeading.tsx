import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 ${light ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base font-sans tracking-wide uppercase opacity-70 ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-0.5 w-16 bg-current opacity-20 mt-6 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;