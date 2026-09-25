import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import MachineryPage from './pages/MachineryPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="bg-[#111111] text-white font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[#EAB308] selection:text-black">
        <Navbar />
        
        <main className="grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/machinery" element={<MachineryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}