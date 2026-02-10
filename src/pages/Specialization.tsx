import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Building2, 
  Settings, 
  Cpu, 
  Factory, 
  ShoppingBag, 
  Coffee, 
  GraduationCap, 
  Stethoscope 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const Specialization = () => {
  const industries = [
    {
      title: "Hotel operations",
      desc: "As a leader in hotel staffing recruitment, we provide specialist personnel for 5-star hotels, luxury resorts, clubs, and elite restaurants globally.",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      title: "Pharma & Healthcare",
      desc: "We identify specialists for leading pharmaceutical firms and hospitals, covering drug discovery, clinical development, and surgical roles.",
      icon: Stethoscope,
      featured: true
    },
    {
      title: "IT & Telecommunications",
      desc: "From Systems Engineers to Software Developers and Project Coordinators, we fulfill complex tech requirements for global projects.",
      icon: Cpu
    },
    {
      title: "Construction & Operations",
      desc: "A strong track record in providing personnel for large-scale constructions, maintenance projects, and site management.",
      icon: Building2
    },
    {
      title: "Engineering & Project Mgmt",
      desc: "Qualified professionals for job functions across engineering, detailed design, cost estimation, and scheduling.",
      icon: Settings
    },
    {
      title: "Manufacturing Industry",
      desc: "Our team searches for talented candidates for production, maintenance, and high-level quality control functions.",
      icon: Factory
    },
    {
      title: "Commercial & Retail",
      desc: "Preferred service providers for Brand Managers, Sales Assistants, and Warehousing personnel for global retail giants.",
      icon: ShoppingBag
    },
    {
      title: "Educational Sector",
      desc: "Connecting international and public schools with certified teachers and administrators who possess skill and diligence.",
      icon: GraduationCap
    }
  ];

  return (

    <Layout>
 <div className="pt-0 min-h-screen bg-white">
      {/* --- Breadcrumb Hero --- */}
      <section className="relative h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="Corporate skyscraper" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/85 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-sm font-medium mb-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37]">Our Specialization</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="text-[#d4af37]">Specialization</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Offering quality recruitment services to organizations worldwide. At P Cube Consulting, 
              we identify and realize client needs accurately to facilitate a seamless recruitment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Intro Text --- */}
      <section className="py-16 border-b border-gray-100">
        <div className="container text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-6">
            Global Expertise Across Multi-Sector Landscapes
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            "Our rigorous search for the best talent from India and beyond has benefitted our client 
            organizations across the globe time and again. We specialize in providing recruitment services 
            to the following industries."
          </p>
        </div>
      </section>

      {/* --- Specialization Grid (Flex with 4 Columns on Desktop) --- */}
      <section className="py-20 bg-gray-50/50">
        <div className="container">
          <div className="flex flex-wrap gap-8 justify-center">
            {industries.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex-grow-0 overflow-hidden relative ${item.featured ? 'ring-1 ring-[#148d8d]/20' : ''}`}
              >
                {/* Icon & Title */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${item.featured ? 'bg-[#148d8d] text-white' : 'bg-gray-100 text-[#0a192f] group-hover:bg-[#0a192f] group-hover:text-white'}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0a192f] mb-4 group-hover:text-[#148d8d] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <Button variant="link" className="p-0 text-[#148d8d] hover:text-[#0a192f] font-bold text-xs uppercase tracking-widest">
                    View Positions <ChevronRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
                
                {/* Decorative Subtle Background Element */}
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   <item.icon size={120} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- High-Impact Sectors (Commercial & Hotel) --- */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Commercial Feature */}
            <div className="bg-[#0a192f] text-white p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Commercial & Retail</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    We are the preferred service provider in the sector of Commercial and Retail. 
                    Our recruitment specialists spot suitable candidates for key positions like 
                    Retail Managers, Brand Managers, and Sales Assistants.
                  </p>
                  <Button className="bg-white text-[#0a192f] hover:bg-[#d4af37] hover:text-white rounded-full">
                    Learn More
                  </Button>
               </div>
               <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={250} />
               </div>
            </div>

            {/* Lodging Feature */}
            <div className="bg-[#148d8d] text-white p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Global Service</h3>
                  <p className="text-white/90 leading-relaxed mb-8">
                    Being a leading recruitment company in the hotel sector, we not only meet 
                    the client's requirement but also provide deserving candidates with the right 
                    job in hotels, clubs, and resorts.
                  </p>
                  <Button className="bg-white text-[#148d8d] hover:bg-[#0a192f] hover:text-white rounded-full">
                    Explore Placements
                  </Button>
               </div>
               <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform">
                  <Coffee size={250} />
               </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
    </Layout>
   
  );
};

export default Specialization;