import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Briefcase, 
  Users, 
  Target, 
  RefreshCcw, 
  ClipboardCheck, 
  Zap,
  Hotel
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const OurServices = () => {
  const servicePillars = [
    {
      title: "Industry Expertise",
      desc: "Our focus is strictly on the hotel staffing business. We understand the nuances of the trade, helping us recruit better candidates than a multi-faceted competitor.",
      icon: Hotel,
      color: "border-t-[#148d8d]"
    },
    {
      title: "Largest Pool of Talent",
      desc: "We maintain an extensive database of potential candidates across all hotel operations spheres, with bio-data ready for speedy reference, saving you on recruitment publicity.",
      icon: Users,
      color: "border-t-[#d4af37]"
    },
    {
      title: "Multi-Point Approach",
      desc: "Present at various strategic locations, we serve a large pool of talent at varying levels and numbers across multiple geographic zones.",
      icon: Target,
      color: "border-t-[#0a192f]"
    },
    {
      title: "Constant Data Updating",
      desc: "Our database is constantly refreshed via our website, walk-ins, and direct outreach. We stay in touch with candidates to update their current professional status.",
      icon: RefreshCcw,
      color: "border-t-[#d4af37]"
    },
    {
      title: "The Process",
      desc: "A one-stop solution. We eliminate the need for you to sift through hundreds of resumes by aggressively promoting your company and prescreening all applicants.",
      icon: ClipboardCheck,
      color: "border-t-[#0a192f]"
    },
    {
      title: "Quick Service",
      desc: "We strive to deliver results quickly. We have achieved filling positions in as little as a week's time, placing over 100 positions in a single month.",
      icon: Zap,
      color: "border-t-[#148d8d]"
    }
  ];

  return (
    <Layout>
   <div className="pt-0 min-h-screen bg-white">
      {/* --- 1. Breadcrumb Hero --- */}
      <section className="relative h-[350px] flex items-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
            alt="Consulting Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <nav className="flex items-center gap-2 text-sm font-medium mb-4">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Home</Link>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37] text-xs uppercase tracking-widest">Our Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elite <span className="text-[#d4af37]">Recruitment</span> Solutions
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Streamlined, cost-effective, and global. We bridge the gap between world-class organizations and top-tier talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Intro Section --- */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0a192f] mb-6">Comprehensive Recruitment Support</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>P Cube Consulting</strong> is a premier International Recruitment Agency specializing in Hotel Management. 
                  The strength of any organization is its people, and we understand people management at a global scale.
                </p>
                <p>
                  We support organizations in acquiring the right candidates while helping professionals secure their dream roles abroad. 
                  Our team utilizes a streamlined methodology to provide placements at Senior, Middle, and Junior management levels.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-[#148d8d]/5 border border-[#148d8d]/20 rounded-lg text-sm font-semibold text-[#148d8d]">Overseas Hotel Jobs</div>
                <div className="px-4 py-2 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg text-sm font-semibold text-[#d4af37]">Job Seeker Services</div>
                <div className="px-4 py-2 bg-[#0a192f]/5 border border-[#0a192f]/20 rounded-lg text-sm font-semibold text-[#0a192f]">Employer Solutions</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80" alt="Service 1" className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" alt="Service 2" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. Service Pillars (Flex Layout) --- */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#0a192f]">Why Choose Our Services?</h3>
            <div className="w-24 h-1 bg-[#148d8d] mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {servicePillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${pillar.color} w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex flex-col items-start hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6 text-[#0a192f]" />
                </div>
                <h4 className="text-xl font-bold text-[#0a192f] mb-4">{pillar.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. Call to Action --- */}
   
    </div>
    </Layout>
 
  );
};

export default OurServices;