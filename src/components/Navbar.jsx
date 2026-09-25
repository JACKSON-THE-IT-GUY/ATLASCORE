import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to handle active navigation highlighting
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#161616] border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#EAB308] text-black p-2 font-black rounded-sm tracking-tighter text-xl">
              ATLASCORE
            </div>
            <div className="text-xs uppercase tracking-widest leading-tight hidden sm:block text-zinc-400 font-bold">
              Heavy Machinery Ltd
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-300">
            <Link 
              to="/" 
              className={`transition ${isActive('/') ? 'text-[#EAB308]' : 'hover:text-[#EAB308]'}`}
            >
              HOME
            </Link>
            <Link 
              to="/machinery" 
              className={`transition ${isActive('/machinery') ? 'text-[#EAB308]' : 'hover:text-[#EAB308]'}`}
            >
              MACHINERY
            </Link>
            <Link 
              to="/services" 
              className={`transition ${isActive('/services') ? 'text-[#EAB308]' : 'hover:text-[#EAB308]'}`}
            >
              SERVICES
            </Link>
            <Link 
              to="/about" 
              className={`transition ${isActive('/about') ? 'text-[#EAB308]' : 'hover:text-[#EAB308]'}`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/contact" 
              className={`transition ${isActive('/contact') ? 'text-[#EAB308]' : 'hover:text-[#EAB308]'}`}
            >
              CONTACT
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-[#EAB308] text-black text-xs font-bold px-5 py-3 tracking-wider hover:bg-yellow-500 transition uppercase"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-zinc-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#161616] px-4 pt-2 pb-4 space-y-2 border-t border-zinc-800 text-sm">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)} 
            className={`block py-2 ${isActive('/') ? 'text-[#EAB308]' : 'text-zinc-300'}`}
          >
            HOME
          </Link>
          <Link 
            to="/machinery" 
            onClick={() => setIsMenuOpen(false)} 
            className={`block py-2 ${isActive('/machinery') ? 'text-[#EAB308]' : 'text-zinc-300'}`}
          >
            MACHINERY
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsMenuOpen(false)} 
            className={`block py-2 ${isActive('/services') ? 'text-[#EAB308]' : 'text-zinc-300'}`}
          >
            SERVICES
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsMenuOpen(false)} 
            className={`block py-2 ${isActive('/about') ? 'text-[#EAB308]' : 'text-zinc-300'}`}
          >
            ABOUT US
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)} 
            className={`block py-2 ${isActive('/contact') ? 'text-[#EAB308]' : 'text-zinc-300'}`}
          >
            CONTACT
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="block text-center bg-[#EAB308] text-black font-bold py-2 mt-4"
          >
            GET A QUOTE
          </Link>
        </div>
      )}
    </nav>
  );
}