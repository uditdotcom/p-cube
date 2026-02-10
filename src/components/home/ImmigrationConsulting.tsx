import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Landmark, Gavel, ChevronRight, Globe, ScrollText, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

interface ConsultRibbon {
  title: string;
  id: number;
}

const consultRibbons: ConsultRibbon[] = [
  { id: 1, title: "Eligibility & Points Assessment" },
  { id: 2, title: "PR Pathway Strategy (AU/CAN/UK)" },
  { id: 3, title: "Family & Dependent Sponsorship" },
  { id: 4, title: "Appeals & Refusal Consulting" },
  { id: 5, title: "Post-Landing Relocation Support" }
];

export const ImmigrationConsulting: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen font-sans">
        {/* 1. Consulting Hero Banner - High Authority Slanted UI */}
        <section className="relative h-[380px] flex items-center bg-[#0a192f] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Professional Legal Consulting"
          />
          <div className="container mx-auto px-4 relative z-10 flex justify-end">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#d4af37] py-6 px-16 rounded-l-full border-y-4 border-l-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <h1 className="text-3xl md:text-5xl font-black text-[#0a192f] tracking-tighter uppercase">
                Immigration Consulting
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 2. Main Content Layout */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: CONSULTING RIBBONS (JOJO Style) */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-xl font-black text-gray-900 mb-10 tracking-[0.2em] uppercase text-center lg:text-left border-b-4 border-[#148d8d] inline-block pb-2">
                Strategic Services
              </h2>
              <div className="space-y-4">
                {consultRibbons.map((ribbon) => (
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
                        <Scale size={18} /> {ribbon.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legal Credibility Badge */}
              <div className="mt-12 p-8 bg-amber-50 rounded-3xl border border-amber-100 flex flex-col items-center text-center">
                 <Gavel className="text-[#d4af37] w-12 h-12 mb-4" strokeWidth={1.5} />
                 <h4 className="font-bold text-[#0a192f] mb-1">Regulated Advice</h4>
                 <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                   Consulting aligned with the latest 2026 global immigration policies.
                 </p>
              </div>
            </div>

            {/* RIGHT: ABOUT IMMIGRATION CONSULTING */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#148d8d]/10 rounded-2xl">
                  <Landmark className="text-[#148d8d] w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#0a192f] uppercase tracking-tighter leading-none">
                  Expert Guidance for Your <br/>Global Future
                </h3>
              </div>

              <div className="prose prose-slate text-gray-600 text-lg leading-relaxed max-w-none space-y-4">
                <p>
                  At <strong>P Cube Consulting</strong>, immigration is more than just a visa; it is a life-changing strategic move. Our consulting division provides the specialized legal and professional insights required to navigate the complexities of international relocation.
                </p>
                <p>
                  With over <strong>12 years of specialized experience</strong>, we evaluate your eligibility across <strong>25+ countries</strong> to find the most viable pathway for your long-term success. We bridge the gap between your professional service credentials and the stringent immigration standards of global governments.
                </p>
              </div>

              {/* Consulting Pillar Icons */}
              <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <ScrollText className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Case Analysis</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Globe className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Global Strategy</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <HeartHandshake className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Settlement</span>
                </div>
              </div>

              {/* <div className="pt-8 flex justify-center lg:justify-start">
                <Button className="bg-[#0a192f] hover:bg-[#148d8d] text-white px-12 py-8 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105 uppercase">
                  Book Legal Consultation <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Floating Side Button */}
        {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
          <div className="rotate-90 origin-right translate-x-0 group-hover:-translate-x-1 transition-transform">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-700 text-white px-12 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-t-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.25)]">
              Consult Expert
            </button>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default ImmigrationConsulting;