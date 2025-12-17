import React from 'react';
import { ShieldCheck, Scissors, Sparkles, Armchair } from 'lucide-react';
import { FEATURES } from '../../constants';
import SectionHeading from '../ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  'ShieldCheck': <ShieldCheck strokeWidth={1} size={40} />,
  'Scissors': <Scissors strokeWidth={1} size={40} />,
  'Sparkles': <Sparkles strokeWidth={1} size={40} />,
  'Armchair': <Armchair strokeWidth={1} size={40} />,
};

const WhyChoose: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Why Choose Kaushik" 
          subtitle="The Distinction" 
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full border border-white/20 text-white/90">
                {iconMap[feature.iconName]}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;