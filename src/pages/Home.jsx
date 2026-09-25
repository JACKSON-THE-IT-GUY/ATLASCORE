import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';

import bgImage from '../assets/images/5.jpeg'; 
import excavatorImg from '../assets/images/Excavator 3.jpeg';
import loaderImg from '../assets/images/4.jpeg';
import truckImg from '../assets/images/6.jpeg';

export default function Home() {
  const featuredMachinery = [
    { 
      title: 'HEAVY EXCAVATORS', 
      desc: 'High-power earthmoving equipment for mining and heavy construction.', 
      image: excavatorImg 
    },
    { 
      title: 'FRONT-END LOADERS', 
      desc: 'Durable loading and material handling equipment for large job sites.', 
      image: loaderImg 
    },
    { 
      title: 'TIPPER TRUCKS', 
      desc: 'Heavy haulage solutions for aggregate transport across provinces.', 
      image: truckImg 
    },
  ];

  return (
    <div className="relative text-white font-sans selection:bg-[#EAB308] selection:text-black">
      
      {/* 1. FIXED BACKGROUND CONTAINER */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={bgImage} 
          alt="Atlascore Heavy Equipment Background" 
          className="w-full h-full object-cover object-center brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
      </div>

      {/* 2. SCROLLABLE CONTENT LAYER */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <Hero />

        {/* Featured Machinery Spotlight */}
        <section className="py-24 bg-black/20 backdrop-blur-sm text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-white/10 pb-6">
              <div>
                <span className="text-[#EAB308] text-[11px] font-black tracking-widest uppercase block mb-1">
                  Fleet Spotlight
                </span>
                <h2 className="text-3xl font-black tracking-tight uppercase text-white">
                  Featured Machinery
                </h2>
              </div>
              <Link 
                to="/machinery" 
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#EAB308] text-black px-6 py-3 text-xs font-black uppercase tracking-wider hover:bg-yellow-500 transition shadow-lg"
              >
                See More Machinery <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredMachinery.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-black/40 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden group hover:border-[#EAB308] transition duration-300 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="h-52 overflow-hidden bg-black/60 relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-sm uppercase mb-2 text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link 
                      to="/machinery" 
                      className="text-xs font-bold text-[#EAB308] uppercase tracking-wider hover:underline inline-flex items-center gap-1"
                    >
                      View Full Fleet <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <AboutSection />

      </div>
    </div>
  );
}