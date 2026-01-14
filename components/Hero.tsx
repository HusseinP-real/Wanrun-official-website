import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for Flooring Factory/Showroom */}
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
          alt="Flooring Manufacturing"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay with Gold Tint */}
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-xl md:text-2xl font-light mb-4 uppercase tracking-[0.2em] animate-fade-in-up text-primary-accent">
          Customer First · Pursuit of Excellence
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
          山东万润集团 <br />
          <span className="text-white text-3xl md:text-5xl font-light mt-4 block">中国领先的地板建材生产企业</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-12 font-light">
          致力于PVC地板产品研发、生产、服务于一体的超大型OEM公司
          <br />
          <span className="text-sm mt-2 block opacity-80">SPC锁扣地板 · LVT地板 · 同质透心卷材 · 地板革</span>
        </p>
        
        <a 
          href="#about"
          className="inline-flex items-center px-10 py-4 border-2 border-primary-accent text-primary-accent text-lg font-medium transition-all duration-300 hover:bg-primary-accent hover:text-white group uppercase tracking-widest"
        >
          了解集团
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;