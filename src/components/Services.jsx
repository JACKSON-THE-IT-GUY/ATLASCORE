import React from 'react';
import { ShieldCheck, Truck, Wrench, Globe, ArrowRight, PhoneCall, MessageSquareQuote } from 'lucide-react';

import hireImg from '../assets/images/5.jpeg';
import sourcingImg from '../assets/images/7.jpeg';
import salesImg from '../assets/images/4.jpeg';
import maintenanceImg from '../assets/images/6.jpeg';

export default function Services() {
  const servicesList = [
    {
      title: "Machinery Hire & Leasing",
      desc: "Flexible short-term and long-term rental contracts for earthmoving, construction, and agricultural equipment.",
      icon: <Truck className="text-[#EAB308]" size={20} />,
      image: hireImg
    },
    {
      title: "International Sourcing",
      desc: "Direct procurement and logistics management from top manufacturing markets including China, Japan, and India.",
      icon: <Globe className="text-[#EAB308]" size={20} />,
      image: sourcingImg
    },
    {
      title: "Equipment Sales",
      desc: "Verified, fully inspected heavy machinery sales tailored to mining companies and commercial contractors.",
      icon: <ShieldCheck className="text-[#EAB308]" size={20} />,
      image: salesImg
    },
    {
      title: "Field Servicing & Maintenance",
      desc: "On-site mechanical support and regular preventive maintenance to guarantee zero operational downtime.",
      icon: <Wrench className="text-[#EAB308]" size={20} />,
      image: maintenanceImg
    }
  ];

  return (
   <section id="services" className="py-20 bg-black/20 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#EAB308] text-xs font-black tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl font-black tracking-tight mt-1 uppercase">Our Core Services</h2>
          <div className="h-1 bg-[#EAB308] w-12 mx-auto mt-3"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden group hover:border-[#EAB308] transition flex flex-col justify-between">
            
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 p-2 rounded-sm border border-zinc-700">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-black uppercase mb-2 tracking-wider">{service.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <a 
                  href={`https://wa.me/26077210464?text=Hello%20Atlascore%2C%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#EAB308] text-xs font-bold uppercase tracking-wider hover:text-yellow-400 transition"
                >
                  Inquire Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-linear-to-r from-zinc-900 via-[#111111] to-zinc-900 border border-zinc-800 p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Accent Line */}
          <div className="absolute top-0 left-0 h-1 w-full bg-[#EAB308]"></div>

          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="text-[#EAB308] text-[10px] font-black tracking-widest uppercase block">
              Immediate Equipment & Contracting Support
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              Need Machinery or Custom Project Sourcing Right Away?
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Speak directly with our team to check plant availability, request custom rates, or schedule field inspection across Zambia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            {/* Direct Phone Call Button */}
            <a 
              href="tel:+26077210464" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 border border-zinc-700 transition"
            >
              <PhoneCall size={16} className="text-[#EAB308]" />
              <span>+260 77 210 464</span>
            </a>

            {/* Request Quote Button - Linked to #contact */}
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EAB308] hover:bg-yellow-500 text-black text-xs font-black uppercase tracking-wider px-6 py-3.5 transition"
            >
              <MessageSquareQuote size={16} />
              <span>Request A Quote</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}