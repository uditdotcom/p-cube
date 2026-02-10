import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Briefcase, Plane, ChevronRight, MapPin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

interface JobRibbon {
  title: string;
  id: number;
}

const overseasRibbons: JobRibbon[] = [
  { id: 1, title: "USA J1 Hotel Internships" },
  { id: 2, title: "Dubai Luxury Hotel Placements" },
  { id: 3, title: "Australia Skilled Migration" },
  { id: 4, title: "Europe Work Permit Programs" },
  { id: 5, title: "Gulf Culinary Career Paths" }
];

export const OverseasHotelJobs: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen font-sans">
        {/* 1. Overseas Hero Banner - High Impact Slanted UI */}
        <section className="relative h-[350px] flex items-center bg-[#0a192f] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="International Hotel Careers"
          />
          <div className="container mx-auto px-4 relative z-10 flex justify-end">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#d4af37] py-6 px-16 rounded-l-full border-y-4 border-l-4 border-white shadow-2xl"
            >
              <h1 className="text-3xl md:text-5xl font-black text-[#0a192f] tracking-tighter uppercase">
                Overseas Hotel Jobs
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 2. Main Content Layout */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: OVERSEAS DESTINATION RIBBONS (JOJO Style) */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-xl font-black text-gray-900 mb-10 tracking-[0.2em] uppercase text-center lg:text-left border-b-4 border-[#148d8d] inline-block pb-2">
                Global Career Paths
              </h2>
              <div className="space-y-4">
                {overseasRibbons.map((ribbon) => (
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
                        <MapPin size={18} /> {ribbon.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Metrics Card */}
              <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex justify-around items-center">
                 <div className="text-center">
                    <p className="text-3xl font-black text-[#148d8d]">25+</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Countries</p>
                 </div>
                 <div className="w-px h-10 bg-slate-300" />
                 <div className="text-center">
                    <p className="text-3xl font-black text-[#148d8d]">15k+</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Placements</p>
                 </div>
              </div>
            </div>

            {/* RIGHT: ABOUT OVERSEAS OPPORTUNITIES */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#d4af37]/10 rounded-2xl">
                  <Globe2 className="text-[#d4af37] w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#0a192f] uppercase tracking-tighter leading-none">
                  Your Global Gateway to <br/>Luxury Lodging
                </h3>
              </div>

              <div className="prose prose-slate text-gray-600 text-lg leading-relaxed max-w-none space-y-4">
                <p>
                  <strong>P Cube Consulting</strong> is your trusted partner for premium international hotel placements. We connect exceptional professionals with the world's most prestigious hotel brands across **USA, Dubai, Europe, and Australia**.
                </p>
                <p>
                  With **12+ years of expertise**, our overseas recruitment engine manages the entire lifecycle of your international career journey—from profile assessment to **Visa & Immigration consulting**. We bridge the gap between world-class talent and the global hotel industry's 500+ partner hotels.
                </p>
              </div>

              {/* Career Pillar Icons */}
              <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Plane className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Immigration</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <GraduationCap className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Internship</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Briefcase className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Recruitment</span>
                </div>
              </div>

              <div className="pt-8 flex justify-center lg:justify-start">
                <Button className="bg-[#148d8d] hover:bg-[#0a192f] text-white px-12 py-8 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105">
                  EXPLORE GLOBAL VACANCIES <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Vertical Enquiry Button */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
          <div className="rotate-90 origin-right translate-x-0 group-hover:-translate-x-1 transition-transform">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-t-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.2)]">
              Quick Application
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OverseasHotelJobs;