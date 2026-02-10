import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Anchor, Waves, ChevronRight, Briefcase, Globe2, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

interface CruiseRibbon {
  title: string;
  id: number;
}

const cruiseRibbons: CruiseRibbon[] = [
  { id: 1, title: "Culinary & Galley Departments" },
  { id: 2, title: "Food & Beverage Service Roles" },
  { id: 3, title: "Housekeeping & Guest Relations" },
  { id: 4, title: "Entertainment & Casino Staff" },
  { id: 5, title: "Spa & Wellness Onboard Jobs" }
];

export const CruiseLineJobs: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen font-sans">
        {/* 1. Maritime Hero Banner - High Seas Slanted UI */}
        <section className="relative h-[380px] flex items-center bg-[#0a192f] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Luxury Cruise Ship Careers"
          />
          <div className="container mx-auto px-4 relative z-10 flex justify-end">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#d4af37] py-6 px-16 rounded-l-full border-y-4 border-l-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <h1 className="text-3xl md:text-5xl font-black text-[#0a192f] tracking-tighter uppercase">
                Cruise Line Jobs
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 2. Main Content Layout */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: CRUISE SERVICE RIBBONS (JOJO Style) */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-xl font-black text-gray-900 mb-10 tracking-[0.2em] uppercase text-center lg:text-left border-b-4 border-[#148d8d] inline-block pb-2">
                Onboard Departments
              </h2>
              <div className="space-y-4">
                {cruiseRibbons.map((ribbon) => (
                  <motion.div
                    key={ribbon.id}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="relative cursor-pointer group drop-shadow-xl"
                  >
                    <div 
                      className="h-16 bg-gradient-to-r from-[#148d8d] to-[#0a192f] flex items-center justify-center transition-all group-hover:brightness-125"
                      style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                    >
                      <span className="text-white font-bold text-sm md:text-base px-10 text-center flex items-center gap-2">
                        <Waves size={18} /> {ribbon.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Maritime Credentials Badge */}
              <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
                 <Compass className="text-[#148d8d] w-12 h-12 mb-4" strokeWidth={1.5} />
                 <h4 className="font-bold text-[#0a192f] mb-1">STCW Compliant Support</h4>
                 <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                   Guidance on Mandatory Maritime Certifications & Documentation.
                 </p>
              </div>
            </div>

            {/* RIGHT: ABOUT CRUISE LINE OPPORTUNITIES */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#d4af37]/10 rounded-2xl">
                  <Ship className="text-[#d4af37] w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#0a192f] uppercase tracking-tighter leading-none">
                  Set Sail on a <br/>Global Career Journey
                </h3>
              </div>

              <div className="prose prose-slate text-gray-600 text-lg leading-relaxed max-w-none space-y-4">
                <p>
                  At <strong>P Cube Consulting</strong>, we specialize in placing exceptional hotel talent on the world's most prestigious cruise lines. Our recruitment expertise ensures that you are matched with premier brands sailing to global destinations.
                </p>
                <p>
                  With over <strong>12 years of industry experience</strong>, we manage the entire recruitment lifecycle for maritime roles—from specialized trade testing to **Visa & CDC documentation** support. We bridge the gap between world-class talent and the global cruise industry's unique staffing requirements.
                </p>
              </div>

              {/* Maritime Pillar Icons */}
              <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Anchor className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Maritime Visas</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Globe2 className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Global Reach</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Briefcase className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Expert Hiring</span>
                </div>
              </div>

              {/* <div className="pt-8 flex justify-center lg:justify-start">
                <Button className="bg-[#148d8d] hover:bg-[#0a192f] text-white px-12 py-8 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105 uppercase">
                  Apply for Shipboard Jobs <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Floating Side Button */}
        {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
          <div className="rotate-90 origin-right translate-x-0 group-hover:-translate-x-1 transition-transform">
            <button className="bg-gradient-to-r from-blue-600 to-navy-900 text-white px-12 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-t-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.25)]">
              Sailing Enquiry
            </button>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default CruiseLineJobs;