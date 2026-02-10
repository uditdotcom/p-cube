import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Our Clients', href: '/#clients' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Sitemap', href: '/sitemap' },
  { name: 'Manage Hospitality', href: '/manage-hospitality' },
];


// TODO: Update these with your actual social media URLs
const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/pcubeconsulting' },
  { name: 'Twitter', href: 'https://twitter.com/pcubeconsulting' },
  { name: 'Instagram', href: 'https://www.instagram.com/pcubeconsulting' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/pcubeconsulting' },
];

const countriesWeServe = [
  'Recruitment in Albania',
  'Recruitment in Bosnia & Herzegovina',
  'Recruitment in Bulgaria',
  'Recruitment in Croatia',
  'Recruitment in Cyprus',
  'Recruitment in Czech Republic',
  'Recruitment in Estonia',
  'Recruitment in Greece',
  'Recruitment in Hungary',
  'Recruitment in Latvia',
  'Recruitment in Lithuania',
  'Recruitment in Republic Of Ireland',
  'Recruitment in Romania',
  'Recruitment in Slovakia',
  'Recruitment in Slovenia',
];

const ourServices = [
  {
    region: 'Gulf',
    services: ['Chef', 'QSR Staff', 'Restaurant Team', 'Hotels Manning', 'Catering & Facility Management']
  },
  {
    region: 'Saudi Arabia',
    services: ['Chefs', 'QSR Staff', 'Restaurant Team', 'Hotel Manning', 'Catering & Facility Management']
  },
  {
    region: 'Asia Pacific',
    services: ['Chefs', 'QSR Staff', 'Restaurant Team', 'Hotels Manning', 'Catering & Facility Management']
  },
  {
    region: 'Europe',
    services: ['Chef', 'QSR Staff', 'Restaurant Team', 'Hotels Manning', 'Catering & Facility Management']
  },
];

export function Footer() {
  const location = useLocation();

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if clicking the same page (without hash)
    if (location.pathname === href && !href.includes('#')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a192f] text-white">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Be Social</h4>
              <div className="flex items-center gap-4">
                <a
                  href={socialLinks[0].href}
                  aria-label={socialLinks[0].name}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#148d8d]/20 hover:bg-[#148d8d]/40 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks[1].href}
                  aria-label={socialLinks[1].name}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#148d8d]/20 hover:bg-[#148d8d]/40 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks[2].href}
                  aria-label={socialLinks[2].name}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#148d8d]/20 hover:bg-[#148d8d]/40 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks[3].href}
                  aria-label={socialLinks[3].name}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#148d8d]/20 hover:bg-[#148d8d]/40 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Statutory Requirements</h4>
              <p className="text-xs text-white/80 leading-relaxed">All certifications and statutory compliances maintained</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#148d8d]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="text-white/85 hover:text-[#d4af37] text-sm transition-colors flex items-start"
                  >
                    <span className="mr-2 text-[#148d8d]">»</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Countries We Serve */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#148d8d]">Top Countries We Serve</h4>
            <ul className="space-y-2">
              {countriesWeServe.map((country) => (
                <li key={country}>
                  <Link
                    to="/overseasrecruitment"
                    onClick={(e) => handleLinkClick('/overseasrecruitment', e)}
                    className="text-white/85 hover:text-[#d4af37] text-sm transition-colors flex items-start"
                  >
                    <span className="mr-2 text-[#148d8d]">»</span>
                    <span>{country}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#148d8d]">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[#d4af37] text-xs uppercase tracking-wide mb-2">Address</p>
                <p className="text-sm text-white/85 leading-relaxed">Ats Bouquet Tower-A sector -132 Noida, </p>
                <p className="text-sm text-white/85 leading-relaxed">Delhi- 747 Pitampura Pura Delhi-110034 </p>
              </div>
              <div>
                <p className="text-[#d4af37] text-xs uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:admin@pcubeconsulting.com" className="text-sm text-white/85 hover:text-[#d4af37] transition-colors break-all">
                  admin@pcubeconsulting.com
                </a>
              </div>
              <div>
                <p className="text-[#d4af37] text-xs uppercase tracking-wide mb-2">Phone no :</p>
                <div className="space-y-1">
                  <a href="tel:+917042332911" className="text-sm text-white/85 hover:text-[#d4af37] transition-colors block">
                    +91 70423 32911
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-t border-[#148d8d]/20">
          {/* <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#148d8d]">Accreditations</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#148d8d]/10 p-3 rounded flex items-center justify-center h-20 border border-[#148d8d]/20">
                <span className="text-xs font-bold text-center text-[#d4af37]">IATA</span>
              </div>
              <div className="bg-[#148d8d]/10 p-3 rounded flex items-center justify-center h-20 border border-[#148d8d]/20">
                <span className="text-xs font-bold text-center text-[#d4af37]">ISO</span>
              </div>
              <div className="bg-[#148d8d]/10 p-3 rounded flex items-center justify-center h-20 border border-[#148d8d]/20">
                <span className="text-xs font-bold text-center text-[#d4af37]">CERT</span>
              </div>
            </div>
          </div> */}

          {/* Our Services by Region */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#148d8d]">Our Services</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ourServices.map((service) => (
                <div key={service.region}>
                  <h5 className="font-semibold text-sm mb-3 text-[#d4af37]">{service.region}</h5>
                  <ul className="space-y-2">
                    {service.services.map((item) => (
                      <li key={item}>
                        <Link
                          to="/ourservices"
                          onClick={(e) => handleLinkClick('/ourservices', e)}
                          className="text-xs text-white/80 hover:text-[#d4af37] transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0a192f] border-t border-[#148d8d]/30">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/90">
          <p>All Rights Reserved © 2026 P Cube Consulting.</p>
          <p>Designed By Digimese</p>
        </div>
      </div>
    </footer>
  );
}
