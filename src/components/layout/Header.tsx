import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Briefcase, Globe, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';


import { motion, AnimatePresence } from 'framer-motion';


const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us', hasSubMenu: true, subItems: [
      { name: 'About us', href: '/about' },
      { name: 'Who we are', href: '/WhoWeAre' },
      { name: 'Career consultant', href: '/CareerConsulting' },
      { name: 'Our specialization', href: '/specialization' },
    ]
  },
  { name: 'Services', href: '/OurServices', hasMegaMenu: true },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Apply Now', href: '/apply' },
  // { name: 'Hire From Us', href: '/hire' },
  // { name: 'Contact', href: '/contact' },
];

const megaMenuItems = [
  {
    title: 'Our Services',
    description: 'Comprehensive recruitment solutions',
    icon: Briefcase,
    items: [
      { name: 'Overseas Recruitment', href: '/overseasrecruitment' },
      { name: 'Domestic Staffing', href: '/domesticstaffing' },
      { name: 'Training Programs', href: '/trainingprogram' },
    ]
  },
  {
    title: 'Hotel & Hotel',
    description: 'Premium hotel placements',
    icon: Globe,
    items: [
      { name: 'Overseas Hotel Jobs', href: '/overseashoteljobs' },
      { name: 'Resort Placements', href: '/resortplacements' },
      { name: 'Cruise Line Jobs', href: '/cruiselinejobs' },
    ]
  },
  {
    title: 'Visa & Immigration',
    description: 'Complete visa support',
    icon: Users,
    items: [
      { name: 'Visa Processing', href: '/visaprocessing' },
      { name: 'Documentation Support', href: '/documentationsupport' },
      { name: 'Immigration Consulting', href: '/immigrationconsulting' },
    ]
  },
  {
    title: 'Career Growth',
    description: 'Professional development',
    icon: Award,
    items: [
      { name: 'Career Consulting', href: '#' },
      { name: 'Skill Enhancement', href: '#' },
      { name: 'Interview Preparation', href: '#' },
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      {/* 1. Elegant Top Bar */}
      <div className="bg-[#0a192f] text-white py-2.5 hidden md:block">
        <div className="container flex justify-between items-center text-[13px] font-medium tracking-wide">
          <div className="flex items-center gap-8">
            <a href="tel:+917042332911" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              +91 70423 32911
            </a>
            <a href="mailto:admin@pcubeconsulting.com" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              admin@pcubeconsulting.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="uppercase text-[11px] opacity-80 letter-spacing-1 text-[#d4af37]">Global Recruitment Specialists
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Area */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-4 group">
          <img src={logo} alt="P Cube Consulting Logo" className="h-14 w-auto transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative px-2 py-1"
              onMouseEnter={() => setIsHovered(item.name)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Link
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5",
                  location.pathname === item.href
                    ? "text-[#148d8d] bg-[#148d8d]/5"
                    : "text-gray-600 hover:text-[#148d8d]"
                )}
              >
                {item.name}
                {(item.hasMegaMenu || item.hasSubMenu) && (
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isHovered === item.name && "rotate-180")} />
                )}
              </Link>

              {/* Submenu for About Us */}
              <AnimatePresence>
                {item.hasSubMenu && isHovered === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-40"
                  >
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#148d8d] hover:bg-[#148d8d]/5 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Beautiful Animated Mega Menu */}
              <AnimatePresence>
                {item.hasMegaMenu && isHovered === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="fixed left-0 right-0 top-[115px] w-screen bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50 overflow-hidden"
                  >
                    <div className="container py-12 grid grid-cols-9 gap-16  justify-items-center items-center">
                      {/* Left: Link Columns (Cols 1-8) */}
                      <div className="col-span-8 grid grid-cols-3 gap-8">
                        {megaMenuItems.slice(0, 3).map((section) => (
                          <div key={section.title}>
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 bg-[#148d8d]/10 rounded-xl text-[#148d8d]">
                                <section.icon className="w-5 h-5" />
                              </div>
                              <h3 className="font-bold text-gray-900">{section.title}</h3>
                            </div>
                            <ul className="space-y-3">
                              {section.items.map((subitem) => (
                                <li key={subitem.name}>
                                  <Link to={subitem.href} className="text-[13px] text-gray-500 hover:text-[#148d8d] flex items-center gap-2 transition-all hover:translate-x-1 group/item">
                                    <div className="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-[#148d8d]" />
                                    {subitem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Right: Featured Promo (Cols 9-12) */}
                      {/* <div className="col-span-4 bg-[#f8fafc] rounded-3xl p-8 border border-gray-100">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">Featured Highlight</h4>
                                                <h3 className="text-xl font-bold text-[#0a192f] mb-3">Global Internship Programs 2026</h3>
                                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                                    Start your luxury lodging journey with premier placements in the USA and Dubai.
                                                </p>
                                                <Button size="sm" className="bg-[#148d8d] hover:bg-[#0a192f] rounded-full group">
                                                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </div> */}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Group */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-[#148d8d] hover:bg-[#148d8d]/5 rounded-full px-6">
            <Link to="/apply">Job Search</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-[#d4af37] to-[#b8952b] text-white rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <Link to="/hire">Hire Talent</Link>
          </Button>
        </div>



        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-[#0a192f] hover:bg-gray-100 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>



      </nav>


      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.hasSubMenu ? setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name) : null}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-teal-light"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Link
                    to={item.href}
                    onClick={() => !item.hasSubMenu && setMobileMenuOpen(false)}
                    className="flex-1 text-left"
                  >
                    {item.name}
                  </Link>
                  {item.hasSubMenu && (
                    <ChevronDown className={cn("w-4 h-4 transition-transform", expandedMobileItem === item.name && "rotate-180")} />
                  )}
                </button>
                {item.hasSubMenu && expandedMobileItem === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-xs text-gray-600 hover:text-[#148d8d] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>Apply for Jobs</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-gold">
                <Link to="/hire" onClick={() => setMobileMenuOpen(false)}>Hire Talent</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}