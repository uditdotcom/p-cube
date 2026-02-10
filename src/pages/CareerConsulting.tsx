import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  ShieldCheck, 
  Briefcase, 
  Network, 
  ChevronRight, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const CareerConsulting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      title: "Tailor-Made Solutions",
      desc: "We don't believe in one-size-fits-all. Every career path is engineered based on your unique strengths and aspirations.",
      icon: Sparkles,
      color: "text-[#148d8d] bg-[#148d8d]/10"
    },
    {
      title: "Executive Professionalism",
      desc: "Our representation of candidates to global clients is marked by integrity, ensuring you are seen as a top-tier professional.",
      icon: Briefcase,
      color: "text-[#d4af37] bg-[#d4af37]/10"
    },
    {
      title: "Strict Confidentiality",
      desc: "Your data and career history are handled with the highest level of security and professional discretion.",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Global Networking",
      desc: "Access our exclusive industry network to find niche roles in 5-star hotel staffing and corporate sectors worldwide.",
      icon: Network,
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (

    <Layout>

<div className="pt-0 min-h-screen bg-white">
      {/* --- Breadcrumb Hero --- */}
      <section className="relative h-[300px] flex items-center overflow-hidden bg-[#0a192f]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
            alt="Consultant background" 
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
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              <Link to="/About" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37]">Career Consulting</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Strategic Career Consulting
            </h1>
            <p className="text-gray-400 text-lg">Your roadmap to global professional excellence.</p>
          </motion.div>
        </div>
      </section>

      {/* --- Main Strategy Section --- */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1 h-[400px]"
            
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" 
                alt="Professional Consultant" 
                className="rounded-[2rem] shadow-2xl relative z-10 w-full h-full object-cover"
              />
              {/* <div className="absolute -top-10 -left-10 p-6 bg-white shadow-xl rounded-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Success Rate</p>
                    <p className="text-xl font-bold text-[#0a192f]">98% Placements</p>
                  </div>
                </div>
              </div> */}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-[#0a192f] mb-6 leading-tight">
                Empowering Your Future with <br />
                <span className="text-[#148d8d]">Informed Decision Making</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At <strong>P Cube Consulting</strong>, we recognize that launching a career in the 
                  international hotel sector requires more than just a job application. It requires 
                  a <strong>trusted partner</strong> who understands the steep curve of professional excellence 
                  both in India and overseas.
                </p>
                <p>
                  We offer a holistic ecosystem for candidates, providing comprehensive 
                  counseling support and end-to-end visa application assistance. Our mission 
                  is to help you make data-driven decisions that propel your employment 
                  history toward global leadership roles.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                 <Button className="bg-[#0a192f] hover:bg-[#148d8d] text-white px-8 py-6 rounded-full text-lg">
                    Book a Consultation
                 </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Core Values Section (Flex Grid) --- */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#0a192f]">Our Core Values</h3>
            <p className="text-gray-500 mt-2">The pillars that define our commitment to your success.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap gap-6 justify-center"
          >
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`p-4 rounded-xl mb-6 ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#0a192f] text-lg mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Footer Assistance Bar --- */}
      <section className="bg-[#148d8d] py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full">
              <Compass className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Need Visa Support?</h4>
              <p className="text-white/80">Our experts handle documentation for USA, UAE, and beyond.</p>
            </div>
          </div>
          <Button variant="outline" className="border-white text-[#148d8d] hover:bg-white hover:text-[#148d8d] px-10 rounded-full">
            Get Assistance Now
          </Button>
        </div>
      </section>
    </div>
    </Layout>
    
  );
};

export default CareerConsulting;