import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Globe2, Users2, FileText, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const WhoWeAre = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    { title: "Domestic Excellence", desc: "Top-tier staffing solutions for India's leading industries.", icon: Users2 },
    { title: "Global Reach", desc: "Specialized placements in USA, Australia, Germany, and Dubai.", icon: Globe2 },
    { title: "End-to-End Support", desc: "Full visa processing and documentation management.", icon: FileText },
    { title: "Premium Partnerships", desc: "Direct ties with 5-star hotel chains and corporate giants.", icon: CheckCircle2 },
  ];

  return (
    <Layout>
    <div className="pt-0">
      {/* --- 1. Breadcrumb Hero Section --- */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Who We Are
          </motion.h1>
          
          {/* Breadcrumb links */}
          <nav className="flex justify-center items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-gray-300 hover:text-[#d4af37] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37]">About Us</span>
          </nav>
        </div>
      </section>

      {/* --- 2. Main Content Section --- */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <motion.div {...fadeIn}>
              <span className="text-[#148d8d] font-bold tracking-widest uppercase text-sm mb-4 block">
                Global Talent Architects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6 leading-tight">
                Empowering Careers Beyond <br /> <span className="text-[#d4af37]">Borders & Boundaries</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  P Cube Consulting is a fast-growing, dynamic organization committed to providing a 
                  <strong> one-stop solution</strong> for all your domestic and international career requirements. 
                  We specialize in high-curve career planning, specifically focusing on the 
                  Hotel staffing and Hotel Management sectors.
                </p>
                <p>
                  Whether you are a student seeking a <strong>USA J1 Visa Internship</strong> or a professional 
                  looking for overseas recruitment in <strong>Australia, Germany, or the Middle East</strong>, 
                  we handle the entire lifecycle—from online interviews to complex visa documentation 
                  and paperwork.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#148d8d]/10 rounded-lg text-[#148d8d]"><MapPin className="w-5 h-5"/></div>
                  <span className="font-semibold text-[#0a192f]">Domestic Placements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#d4af37]/10 rounded-lg text-[#d4af37]"><Globe2 className="w-5 h-5"/></div>
                  <span className="font-semibold text-[#0a192f]">Overseas Expertise</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80" 
                alt="Team working" 
                className="rounded-[2rem] shadow-2xl relative z-10 w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#d4af37]/10 rounded-full -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. Features Flex Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-[#0a192f]">Why P Cube Consulting?</h3>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-4" />
          </div>

          {/* Using Flexbox as requested for the 4-column layout */}
          <div className="flex flex-wrap gap-8 justify-center">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex-grow-0 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0a192f] text-[#d4af37] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#0a192f] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CTA Section --- */}
      <section className="py-16 bg-[#fff]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to start your global journey?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#148d8d] hover:bg-white hover:text-[#148d8d] rounded-full px-8">
              Explore Job Openings
            </Button>
            <Button size="lg" variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white rounded-full px-8">
              Contact Consultant
            </Button>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default WhoWeAre;