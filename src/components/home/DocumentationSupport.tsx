import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Verified, PenTool, ChevronRight, Fingerprint, BookCheck, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

interface DocRibbon {
  title: string;
  id: number;
}

const docRibbons: DocRibbon[] = [
  { id: 1, title: "Degree & Certificate Attestation" },
  { id: 2, title: "Experience Letter Verification" },
  { id: 3, title: "PCC & Medical Report Handling" },
  { id: 4, title: "Embassy & MOFA Legalization" },
  { id: 5, title: "Translation & Notary Services" }
];

export const DocumentationSupport: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen font-sans">
        {/* 1. Documentation Hero Banner - Precision Slanted UI */}
        <section className="relative h-[380px] flex items-center bg-[#0a192f] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Legal Documentation and Verification"
          />
          <div className="container mx-auto px-4 relative z-10 flex justify-end">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#d4af37] py-6 px-16 rounded-l-full border-y-4 border-l-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <h1 className="text-3xl md:text-5xl font-black text-[#0a192f] tracking-tighter uppercase">
                Documentation Support
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 2. Main Content Layout */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: DOCUMENTATION RIBBONS (JOJO Style) */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-xl font-black text-gray-900 mb-10 tracking-[0.2em] uppercase text-center lg:text-left border-b-4 border-[#148d8d] inline-block pb-2">
                Our Verification Services
              </h2>
              <div className="space-y-4">
                {docRibbons.map((ribbon) => (
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
                        <FileText size={18} /> {ribbon.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Security Badge */}
              <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col items-center text-center">
                 <ShieldCheck className="text-[#148d8d] w-12 h-12 mb-4" strokeWidth={1.5} />
                 <h4 className="font-bold text-[#0a192f] mb-1">Secure Data Handling</h4>
                 <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                   Confidentiality Guaranteed for All Personal & Academic Records.
                 </p>
              </div>
            </div>

            {/* RIGHT: ABOUT DOCUMENTATION SERVICES */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#d4af37]/10 rounded-2xl">
                  <PenTool className="text-[#d4af37] w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#0a192f] uppercase tracking-tighter leading-none">
                  Precision in Every <br/>Documentary Detail
                </h3>
              </div>

              <div className="prose prose-slate text-gray-600 text-lg leading-relaxed max-w-none space-y-4">
                <p>
                  At <strong>P Cube Consulting</strong>, we know that administrative errors are the leading cause of visa delays. Our dedicated documentation team ensures that every piece of your professional and academic history is verified and legalized according to international standards.
                </p>
                <p>
                  With **12+ years of experience**, we navigate the complexities of MOFA attestations, embassy legalizations, and background checks so you don't have to. We bridge the gap between your qualifications and the strict compliance needs of global employers.
                </p>
              </div>

              {/* Documentation Pillar Icons */}
              <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Verified className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Verification</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <Fingerprint className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Background</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="p-5 bg-gray-50 rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                    <BookCheck className="w-10 h-10 text-gray-400 group-hover:text-[#148d8d]" strokeWidth={1} />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-900">Legalization</span>
                </div>
              </div>

              {/* <div className="pt-8 flex justify-center lg:justify-start">
                <Button className="bg-[#148d8d] hover:bg-[#0a192f] text-white px-12 py-8 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105 uppercase">
                  Start Verification Process <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Floating Side Button */}
        {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group">
          <div className="rotate-90 origin-right translate-x-0 group-hover:-translate-x-1 transition-transform">
            <button className="bg-gradient-to-r from-teal-600 to-navy-900 text-white px-12 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-t-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.25)]">
              Support Enquiry
            </button>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default DocumentationSupport;