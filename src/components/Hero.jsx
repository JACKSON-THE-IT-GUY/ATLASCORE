import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Globe, Users, Truck, ArrowRight } from 'lucide-react';

// Exact path from your find output:
import heroBg from '../assets/images/background.jpeg';

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-[85vh] flex items-center bg-black overflow-hidden pt-12 pb-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-[#111] via-[#111]/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#EAB308]/20 text-[#EAB308] border border-[#EAB308]/30 text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-sm">
              Zambia's Reliable Heavy Equipment Partner
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-2 text-white leading-tight">
              ATLASCORE<br/>
              <span className="text-zinc-400">HEAVY MACHINERY LTD</span>
            </h1>
            <p className="text-[#EAB308] font-bold text-sm sm:text-base mb-4 uppercase tracking-wider">
              Professional Heavy Machinery Supply, Sales & Hire
            </p>
            <p className="text-zinc-300 text-xs sm:text-sm mb-8 max-w-lg leading-relaxed">
              Powering major construction, mining, and agricultural operations across Zambia. From local fleet leasing to direct international sourcing from China, Japan, and India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/machinery" className="bg-[#EAB308] text-black font-bold text-xs tracking-wider px-6 py-4 uppercase hover:bg-yellow-500 transition flex items-center gap-2">
                View Fleet Inventory <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="border border-zinc-500 hover:border-white text-white font-bold text-xs tracking-wider px-6 py-4 uppercase transition">
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Key Stats Counter Bar */}
      <section className="bg-[#0D0D0D] py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-zinc-800/60 last:border-0">
            <h3 className="text-2xl sm:text-3xl font-black text-[#EAB308]">50+</h3>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase font-semibold tracking-wider">Machinery Fleet Units</p>
          </div>
          <div className="border-r border-zinc-800/60 last:border-0">
            <h3 className="text-2xl sm:text-3xl font-black text-[#EAB308]">100%</h3>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase font-semibold tracking-wider">Fully Serviced & Insured</p>
          </div>
          <div className="border-r border-zinc-800/60 last:border-0">
            <h3 className="text-2xl sm:text-3xl font-black text-[#EAB308]">24/7</h3>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase font-semibold tracking-wider">On-Site Support</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#EAB308]">3 Markets</h3>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase font-semibold tracking-wider">China, Japan, India Sourcing</p>
          </div>
        </div>
      </section>

      {/* Core Value Pillars Grid */}
      <section className="bg-[#161616] py-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Shield className="mx-auto text-[#EAB308] mb-2" size={24} />, title: "QUALITY EQUIPMENT", desc: "Well maintained, high-output machines ready for heavy duty." },
              { icon: <DollarSign className="mx-auto text-[#EAB308] mb-2" size={24} />, title: "COMPETITIVE RATES", desc: "Transparent, flexible pricing for long and short-term hire." },
              { icon: <Globe className="mx-auto text-[#EAB308] mb-2" size={24} />, title: "GLOBAL SOURCING", desc: "Direct import channels from top Asian manufacturing hubs." },
              { icon: <Users className="mx-auto text-[#EAB308] mb-2" size={24} />, title: "EXPERT SUPPORT", desc: "Dedicated maintenance technicians on standby." },
              { icon: <Truck className="mx-auto text-[#EAB308] mb-2" size={24} />, title: "SITE DELIVERY", desc: "Fast machinery dispatch to your operational site in Zambia." }
            ].map((item, idx) => (
              <div key={idx} className="p-2">
                {item.icon}
                <h4 className="text-xs font-bold tracking-wider mb-1 uppercase text-zinc-200">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}