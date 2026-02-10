import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle2, ChevronRight, Laptop, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const trainingRibbons = [
  { id: 1, title: "Guest services staffing Soft Skills" },
  { id: 2, title: "Pre-Departure Orientation" },
  { id: 3, title: "Culinary Trade Testing" },
  { id: 4, title: "Language & Communication" },
  { id: 5, title: "Interview Masterclass" }
];

export const TrainingProgram: React.FC = () => {
  return (
    <Layout>
 <div className="bg-white min-h-screen font-sans">
      {/* 1. Training Hero Banner */}
      <section className="relative h-[350px] flex items-center bg-[#0a192f] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Professional Training"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-[#d4af37] inline-block py-5 px-12 rounded-l-full border-l-8 border-white shadow-2xl float-right"
          >
            <h1 className="text-3xl md:text-5xl font-black text-[#0a192f] tracking-tighter uppercase">
              Professional Training Programs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Layout */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: TRAINING MODULE RIBBONS */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-xl font-black text-gray-900 mb-10 tracking-[0.2em] uppercase text-center lg:text-left">
              Our Core Modules
            </h2>
            <div className="space-y-4">
              {trainingRibbons.map((ribbon) => (
                <motion.div
                  key={ribbon.id}
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer group"
                >
                  <div 
                    className="h-16 bg-gradient-to-r from-[#148d8d] to-[#0a192f] flex items-center justify-center shadow-lg transition-all group-hover:brightness-125"
                    style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                  >
                    <span className="text-white font-bold text-sm md:text-base px-10">
                      {ribbon.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Accreditation Badge */}
            {/* <div className="mt-12 p-8 bg-teal-50 rounded-3xl border-2 border-dashed border-teal-200 text-center">
              <Award className="w-12 h-12 text-[#148d8d] mx-auto mb-4" />
              <h4 className="font-bold text-[#0a192f] mb-2">Industry-Recognized Certification</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Receive a certificate of completion recognized by our 500+ global hotel partners upon successful training.
              </p>
            </div> */}
          </div>

          {/* RIGHT: TRAINING OVERVIEW */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-1 bg-[#d4af37]" />
               <h3 className="text-2xl font-black text-[#0a192f] uppercase tracking-tighter">Empowering the Next Generation</h3>
            </div>

            <div className="prose prose-slate text-gray-600 text-lg leading-relaxed max-w-none">
              <p>
                At <strong>P Cube Consulting</strong>, we believe that placement is just the final step. The real journey begins with preparation. Our training programs are designed to bridge the skill gap and prepare candidates for the rigorous demands of global guest services.
              </p>
              <p>
                Whether you are preparing for a <strong>J1 Internship in the USA</strong> or a professional role in <strong>Dubai</strong>, our expert trainers provide personalized coaching in communication, technical skills, and cultural adaptability.
              </p>
            </div>

            {/* Feature Icons Row */}
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
              <div className="flex flex-col items-center text-center group">
                <Laptop className="w-12 h-12 text-gray-300 group-hover:text-[#148d8d] transition-colors" />
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-900">Online/Offline</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <CheckCircle2 className="w-12 h-12 text-gray-300 group-hover:text-[#148d8d] transition-colors" />
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-900">Trade Tested</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <Star className="w-12 h-12 text-gray-300 group-hover:text-[#148d8d] transition-colors" />
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-900">Expert-Led</span>
              </div>
            </div>

            {/* <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-[#148d8d] hover:bg-[#0a192f] text-white px-10 py-7 rounded-full font-bold shadow-xl transition-transform hover:scale-105">
                ENROLL IN PROGRAM <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-[#0a192f] text-[#0a192f] px-10 py-7 rounded-full font-bold hover:bg-gray-50">
                DOWNLOAD BROCHURE
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Floating Enquiry Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="rotate-90 origin-right">
          <button className="bg-gradient-to-r from-[#d4af37] to-[#b8952b] text-[#0a192f] px-10 py-3 font-black text-xs uppercase tracking-widest rounded-t-xl shadow-2xl">
            Course Enquiry
          </button>
        </div>
      </div>
    </div>
    </Layout>
   
  );
};
export default TrainingProgram;