import React from 'react';
import { motion } from 'framer-motion';
import { Plane, GraduationCap, Briefcase, ChevronRight, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export default function OverseasRecruitment() {
  const specializedServices = [
    "Permanent Residence Visa",
    "J1 Internship USA",
    "Australia Service Program",
    "Europe Skilled Work Permits",
    "Gulf Luxury Hotel Placements"
  ];

  return (
    <Layout>
    <div className="bg-white min-h-screen">
      {/* 1. Impact Header Banner */}
      <section className="relative h-[400px] flex items-center bg-[#0a192f] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Global Guest services staffing"
        />
        <div className="container relative z-10">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-[#d4af37] inline-block py-6 px-16 rounded-l-full border-l-8 border-white shadow-2xl float-right"
          >
            <h1 className="text-4xl md:text-6xl font-black text-[#0a192f] tracking-tighter">
              OVERSEAS RECRUITMENT
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: TOP RATED SERVICES (The JOJO Ribbons) */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-2xl font-black text-gray-900 mb-10 tracking-[0.2em] uppercase text-center lg:text-left border-b-4 border-[#148d8d] inline-block pb-2">
              Top Rated Services
            </h2>
            <div className="space-y-4">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer relative"
                >
                  <div 
                    className="h-16 bg-gradient-to-r from-[#148d8d] to-[#0a192f] flex items-center justify-center shadow-xl group-hover:brightness-125 transition-all"
                    style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
                  >
                    <span className="text-white font-bold text-sm md:text-base px-12 text-center">
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
               <h4 className="font-bold text-[#148d8d] mb-2 flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5" /> Verified Placements
               </h4>
               <p className="text-xs text-gray-500">
                 All overseas roles are vetted for compliance with local labor laws and international safety standards.
               </p>
            </div>
          </div>

          {/* RIGHT: ABOUT THE PROGRAM */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-1 bg-[#d4af37]" />
               <h3 className="text-xl font-extrabold text-[#0a192f] uppercase tracking-tighter">About Our Overseas Division</h3>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>P Cube Consulting</strong> specializes in bridging the gap between world-class hotel talent and premium international employers. Our overseas recruitment engine is built on a foundation of professional excellence and deep industry knowledge.
              </p>
              <p>
                We provide end-to-end support for candidates seeking careers in **USA, Australia, Europe, and the Middle East**. From initial profile assessment and interview preparation to complex visa documentation and immigration consulting, our team handles every detail.
              </p>
            </div>

            {/* Pillar Icons Section */}
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
              {[
                { icon: Plane, label: "Immigration" },
                { icon: GraduationCap, label: "Internship" },
                { icon: Briefcase, label: "Recruitment" }
              ].map((pillar, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <pillar.icon className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>

           
          </div>

        </div>
      </section>

      {/* 3. Global Statistics Footer (Trust Bar) */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
             <div className="text-3xl font-black text-[#0a192f]">25+</div>
             <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Countries Served</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-black text-[#0a192f]">15k+</div>
             <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Placements</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-black text-[#0a192f]">500+</div>
             <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Partner Hotels</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-black text-[#0a192f]">12+</div>
             <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Years Experience</div>
           </div>
        </div>
      </section>

      {/* Floating Vertical Enquiry Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
        <div className="rotate-90 origin-right translate-x-0 group-hover:-translate-x-1 transition-transform">
          <button className="bg-gradient-to-r from-[#d4af37] to-[#b8952b] text-[#0a192f] px-10 py-4 font-black text-sm uppercase tracking-[0.2em] rounded-t-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
            Quick Enquiry
          </button>
        </div>
      </div>
    </div>
    </Layout>

  );
}