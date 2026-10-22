import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white text-black border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info Details */}
        <div>
          <h2 className="text-2xl font-black tracking-tight uppercase mb-6">Get In Touch</h2>
          <p className="text-zinc-600 text-xs mb-8">We're here to help! Reach out to us for inquiries, quotes, or equipment availability.</p>
          
          <div className="space-y-5 text-xs font-medium mb-8">
            {/* Phone Dial */}
            <a href="tel:+260779495904" className="flex items-center gap-3 text-black hover:text-[#EAB308] transition">
              <Phone size={16} className="text-[#EAB308]" />
              <span className="font-semibold">+260 779 495 904</span>
            </a>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/260779495904?text=Hello%20Atlascore%2C%20I%20am%20inquiring%20about%20heavy%20machinery."
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-black hover:text-[#EAB308] transition"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-4 h-4" 
              />
              <span className="font-semibold">Message us on WhatsApp</span>
            </a>

            {/* Email */}
            <a href="mailto:atlascoreheavymachineryltd@gmail.com" className="flex items-center gap-3 text-black hover:text-[#EAB308] transition">
              <Mail size={16} className="text-[#EAB308]" />
              <span>atlascoreheavymachineryltd@gmail.com</span>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#EAB308] mt-0.5 shrink-0" />
              <div>
                <p className="font-bold uppercase">Atlascore Heavy Machinery Ltd</p>
                <p className="text-zinc-600">Great East Road, Opposite Munali Mall, Lusaka, Zambia</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-[#EAB308] mt-0.5 shrink-0" />
              <div>
                <p>Monday - Friday: 08:00 - 17:00</p>
                <p>Saturday: 08:00 - 15:00</p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map (Munali Mall Area) */}
          <div className="w-full h-64 bg-zinc-100 border border-zinc-300 overflow-hidden rounded-sm relative">
            <iframe
              title="Atlascore Location Opposite Munali Mall"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.823610931215!2d28.342123!3d-15.387141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f353a29087ed%3A0x89e083dbf4e5a32b!2sMunali%20Mall!5e0!3m2!1sen!2szm!4v1710000000000!5m2!1sen!2szm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Lead Form */}
        <div className="bg-zinc-50 p-8 border border-zinc-200">
          <h3 className="text-sm font-black uppercase tracking-wider mb-4">Send Us A Message</h3>
          <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-white border border-zinc-300 focus:outline-none focus:border-black" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-white border border-zinc-300 focus:outline-none focus:border-black" />
            </div>
            <div>
              <input type="text" placeholder="Your Phone" className="w-full p-3 bg-white border border-zinc-300 focus:outline-none focus:border-black" />
            </div>
            <div>
              <select className="w-full p-3 bg-white border border-zinc-300 focus:outline-none focus:border-black text-zinc-500">
                <option>Select Service</option>
                <option>Machinery Hire</option>
                <option>Machinery Purchase</option>
                <option>Sourcing Inquiry</option>
              </select>
            </div>
            <div>
              <textarea rows="4" placeholder="Your Message" className="w-full p-3 bg-white border border-zinc-300 focus:outline-none focus:border-black"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#EAB308] text-black font-bold tracking-wider py-3 uppercase hover:bg-yellow-500 transition">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}