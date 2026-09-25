import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/90 backdrop-blur-md border-t border-white/10 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-white font-black text-sm tracking-wider mb-3">ATLASCORE</h4>
          <p className="text-[11px] leading-relaxed text-zinc-500">Professional Heavy Machinery Supply, Sales & Hire across Zambia.</p>
          
          {/* Custom inline SVGs for social brands */}
          <div className="flex gap-4 mt-4 text-zinc-500">
            <a href="#" className="hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold tracking-wider mb-3 uppercase text-[11px]">Quick Links</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#machinery" className="hover:text-white">Machinery</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold tracking-wider mb-3 uppercase text-[11px]">Our Machinery</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li>Excavators</li>
            <li>Front-End Loaders</li>
            <li>TLBs</li>
            <li>Trucks & Tractors</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold tracking-wider mb-3 uppercase text-[11px]">Contact Info</h4>
          <p className="text-[11px] mb-1">+260 77 210 464</p>
          <p className="text-[11px] mb-1 overflow-hidden text-ellipsis">atlascoreheavymachineryltd@gmail.com</p>
          <p className="text-[11px]">Zambia</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-zinc-900 text-center text-[10px] text-zinc-600">
        © 2026 Atlascore Heavy Machinery Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}