import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, ShieldCheck, ChevronRight, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

// Define Types for our data
interface ServiceRibbon {
  title: string;
  id: number;
}

const domesticRibbons: ServiceRibbon[] = [
  { id: 1, title: "Executive Search (GM & HODs)" },
  { id: 2, title: "Pre-Opening Mass Recruitment" },
  { id: 3, title: "Specialized Culinary Staffing" },
  { id: 4, title: "Front Office & Guest Relations" },
  { id: 5, title: "Corporate Hotel operations Services" }
];

export const DomesticStaffing: React.FC = () => {
  return (
    <Layout>
  <div className="bg-white min-h-screen font-sans">
      {/* 1. Domestic Hero Banner */}
      <section className="relative h-[350px] flex items-center bg-[#0a192f] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Domestic Hotel India"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-[#d4af37] inline-block py-5 px-12 rounded-l-full border-l-8 border-white shadow-2xl float-right"
          >
            <h1 className="text-3xl md:text-5xl font-black text-[#0a192f] tracking-tighter uppercase">
              Domestic Staffing Solutions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-12 gap-12">
          
          {/* LEFT: DOMESTIC SERVICE RIBBONS */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-xl font-black text-gray-900 mb-8 tracking-[0.2em] uppercase text-center lg:text-left">
              India Recruitment Services
            </h2>
            <div className="space-y-3">
              {domesticRibbons.map((ribbon) => (
                <motion.div
                  key={ribbon.id}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="relative cursor-pointer filter drop-shadow-md"
                >
                  <div 
                    className="h-16 bg-gradient-to-r from-[#148d8d] to-[#0a192f] flex items-center justify-center transition-all group"
                    style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                  >
                    <span className="text-white font-bold text-sm md:text-base px-10 text-center">
                      {ribbon.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <h4 className="font-bold text-[#0a192f] flex items-center gap-2 mb-2">
                 <MapPin className="w-4 h-4 text-[#d4af37]" /> Nationwide Reach
               </h4>
               <p className="text-sm text-gray-600">
                 Sourcing talent across Tier 1 and Tier 2 cities in India for boutique resorts and luxury hotel chains.
               </p>
            </div>
          </div>

          {/* RIGHT: ABOUT DOMESTIC SERVICES */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="text-[#d4af37] w-8 h-8" />
              <h3 className="text-2xl font-black text-[#0a192f] uppercase tracking-tighter">Local Expertise, Global Standards</h3>
            </div>

            <div className="prose prose-slate text-gray-600 text-lg leading-relaxed max-w-none">
              <p>
                At <strong>P Cube Consulting</strong>, we bridge the gap between India's most ambitious hotel professionals and the country's most prestigious 5-star hotels and luxury resorts.
              </p>
              <p>
                With over <strong>12 years of experience</strong> in the Indian market, we have refined our recruitment process to focus on skill assessment and cultural fit. Our extensive database of over <strong>15,000 verified professionals</strong> allows us to fill critical roles with precision.
              </p>
            </div>

            {/* Core Pillars Icon Row */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-gray-100">
              <div className="flex flex-col items-center text-center group">
                <Search className="w-12 h-12 text-gray-300 group-hover:text-[#148d8d] transition-colors" strokeWidth={1.5} />
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sourcing</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <ShieldCheck className="w-12 h-12 text-gray-300 group-hover:text-[#148d8d] transition-colors" strokeWidth={1.5} />
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Screening</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <Users className="w-12 h-12 text-gray-300 group-hover:text-[#148d8d] transition-colors" strokeWidth={1.5} />
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Placement</span>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Floating Enquiry Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="rotate-90 origin-right">
          <button className="bg-gradient-to-r from-[#d4af37] to-[#b8952b] text-[#0a192f] px-10 py-3 font-black text-xs uppercase tracking-widest rounded-t-xl shadow-2xl hover:pb-5 transition-all">
            Quick Enquiry
          </button>
        </div>
      </div>
    </div>
    </Layout>
  
  );
};export default DomesticStaffing;