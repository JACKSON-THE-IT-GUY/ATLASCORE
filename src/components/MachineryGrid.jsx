import { useState } from 'react';

// Local Asset Imports
import excavatorImg from '../assets/images/Excavator 3 (1).jpeg';
import graderImg from '../assets/images/front-end.jpeg';
import frontEndLoaderImg from '../assets/images/motor grader.jpeg';
import bulldozerImg from '../assets/images/bulldozer.jpeg';
import lowbedTruckImg from '../assets/images/lowbed-truck.jpeg';
import tipperTruckImg from '../assets/images/tipper-truck.jpeg';
import trucksVariedImg from '../assets/images/trucks-various.jpeg';
import tractorImg from '../assets/images/heavy-tractor.jpeg';
import img6 from '../assets/images/6.jpeg';

export default function MachineryGrid() {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = [
    'ALL', 
    'EXCAVATORS', 
    'LOADERS', 
    'TLBS', 
    'GRADERS', 
    'BULLDOZERS', 
    'TRUCKS', 
    'TRANSPORT', 
    'TRACTORS'
  ];

  const machineryItems = [
    { 
      id: 1,
      title: 'TLB / BACKHOE LOADER', 
      image: img6,
      cat: 'TLBS',
      rate: 'Daily Rate',
      desc: 'Versatile digging, trenching, and site preparation loader.'
    },
    { 
      id: 2,
      title: '21-TON EXCAVATOR', 
      image: excavatorImg, 
      cat: 'EXCAVATORS',
      rate: 'Inquire for Rates',
      desc: 'Heavy excavation, demolition, and bulk earthmoving.'
    },
    { 
      id: 3,
      title: 'MOTOR GRADER', 
      image: graderImg,
      cat: 'GRADERS',
      rate: 'Inquire for Rates',
      desc: 'Precision road construction, leveling, and site grading.'
    },
    { 
      id: 4,
      title: 'FRONT-END LOADER', 
      image: frontEndLoaderImg,
      cat: 'LOADERS',
      rate: 'Inquire for Rates',
      desc: 'High-capacity loading for sand, gravel, and stone materials.'
    },
    { 
      id: 5,
      title: 'BULLDOZER / DOZER', 
      image: bulldozerImg,
      cat: 'BULLDOZERS',
      rate: 'Inquire for Rates',
      desc: 'Heavy land clearing, bush clearing, and earth pushing.'
    },
    { 
      id: 6,
      title: '30-TON TIPPER TRUCK', 
      image: tipperTruckImg,
      cat: 'TRUCKS',
      rate: 'Daily Rate',
      desc: 'Bulk haulage for aggregate, soil, and site clearance waste.'
    },
    { 
      id: 7,
      title: 'LOWBED TRUCK', 
      image: lowbedTruckImg,
      cat: 'TRANSPORT',
      rate: 'Inquire for Rates',
      desc: 'Machinery transportation and heavy plant equipment transit.'
    },
    { 
      id: 8,
      title: 'TRUCKS (VARIOUS)', 
      image: trucksVariedImg,
      cat: 'TRUCKS',
      rate: 'Inquire for Rates',
      desc: 'Multi-purpose haulage trucks for site logistics and materials.',
      imageCredit: {
        text: 'Photo: Sneha G. Gupta, CC BY-SA 4.0',
        url: 'https://commons.wikimedia.org/wiki/File:Freight_transportation_by_road_on_open_truck.jpg'
      }
    },
    { 
      id: 9,
      title: 'HEAVY TRACTORS', 
      image: tractorImg,
      cat: 'TRACTORS',
      rate: 'Inquire for Rates',
      desc: 'Agricultural cultivation, site slashing, and utility towing.'
    },
  ];

  const filteredMachinery = activeTab === 'ALL' 
    ? machineryItems 
    : machineryItems.filter(item => item.cat === activeTab);

  return (
    <section id="machinery" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase">Our Fleet</span>
          <h2 className="text-3xl font-black tracking-tight mt-1 uppercase">Machinery For Hire</h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveTab(cat)}
              className={`text-xs font-bold px-4 py-2 tracking-wider uppercase transition ${
                activeTab === cat 
                  ? 'bg-[#EAB308] text-black' 
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachinery.map((item) => (
            <div key={item.id} className="bg-zinc-50 border border-zinc-200 group overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-56 overflow-hidden bg-zinc-200 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  {item.imageCredit && (
                    <a
                      href={item.imageCredit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 bg-black/75 px-2 py-1 text-[9px] text-white"
                    >
                      {item.imageCredit.text}
                    </a>
                  )}
                  <span className="absolute top-3 left-3 bg-black/80 text-[#EAB308] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {item.rate}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-black text-sm tracking-wider mb-2 uppercase">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <a 
                  href={`https://wa.me/260779495904?text=${encodeURIComponent(`Hello Atlascore, I would like to enquire about hiring the ${item.title}. Please share availability, hire rates, and booking details. Thank you.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#EAB308] text-black text-center py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-yellow-500 transition"
                >
                  Hire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}