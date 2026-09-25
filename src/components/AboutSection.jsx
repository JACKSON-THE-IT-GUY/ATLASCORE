import React from 'react';
import founderImg from '../assets/images/founder.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black/20 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Founder Image Container */}
          <div className="relative">
            <div className="border-4 border-[#EAB308] p-2 bg-[#161616]">
              <img 
                src={founderImg} 
                alt="Peter Kapepa - Founder & CEO" 
                className="w-full h-105 object-cover grayscale hover:grayscale-0 transition duration-500" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#EAB308] text-black p-6 hidden sm:block">
              <p className="font-black text-xl uppercase leading-none">PETER KAPEPA</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-1">Founder & Managing Director</p>
            </div>
          </div>

          {/* About Narrative */}
          <div className="space-y-6">
            <div>
              <span className="text-[#EAB308] text-xs font-black tracking-widest uppercase">About Atlascore</span>
              <h2 className="text-3xl font-black tracking-tight mt-1 uppercase">Reliable Power Behind Your Operations</h2>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Founded by Peter Kapepa, Atlascore Heavy Machinery Ltd has established itself as a premier equipment partner across Zambia. We specialize in supply, hire, and international procurement for heavy industry, mining, and civil construction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="bg-[#161616] p-4 border border-zinc-800">
                <h4 className="text-xs font-bold text-[#EAB308] uppercase mb-1">Direct Import Pipeline</h4>
                <p className="text-[11px] text-zinc-400">Streamlined sourcing channels from China, Japan, and India.</p>
              </div>
              <div className="bg-[#161616] p-4 border border-zinc-800">
                <h4 className="text-xs font-bold text-[#EAB308] uppercase mb-1">Local Site Support</h4>
                <p className="text-[11px] text-zinc-400">On-demand servicing and rapid equipment delivery nationwide.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}