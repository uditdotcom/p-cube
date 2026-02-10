import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { ChevronRight } from 'lucide-react';

const sitemapLinks = [
  {
    category: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Who We Are', href: '/whoweare' },
      { name: 'Contact Us', href: '/contact' },
    ]
  },
  {
    category: 'Services',
    links: [

      { name: 'Career Consulting', href: '/careerconsulting' },
      { name: 'Visa Processing', href: '/visaprocessing' },
      { name: 'Documentation Support', href: '/documentationsupport' },
      { name: 'Immigration Consulting', href: '/immigrationconsulting' },
    ]
  },
  {
    category: 'Recruitment',
    links: [
      { name: 'Domestic Staffing', href: '/domesticstaffing' },
      { name: 'Overseas Recruitment', href: '/overseasrecruitment' },
      { name: 'Overseas Hotel Jobs', href: '/overseashoteljobs' },
      { name: 'Resort Placements', href: '/resortplacements' },
      { name: 'Cruise Line Jobs', href: '/cruiselinejobs' },
    ]
  },
  {
    category: 'Jobs & Applications',
    links: [
      { name: 'Browse Jobs', href: '/jobs' },
      { name: 'Apply Now', href: '/apply' },
      { name: 'Hire with Us', href: '/hire' },
    ]
  },
  {
    category: 'Information',
    links: [
      { name: 'Our Team', href: '/about' },
      { name: 'Specialization', href: '/specialization' },
      { name: 'Training Program', href: '/trainingprogram' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Manage Hospitality', href: '/manage-hospitality' },
    ]
  }
];

export default function Sitemap() {
  return (
    <Layout>
      <div className="min-h-[60vh] py-12 lg:py-16">
        <div className="container">
          {/* Header */}
          <div className="mb-12">
            <SectionHeading
              title="Sitemap"
              subtitle="Navigate through all pages and sections of our website"
              centered
            />
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sitemapLinks.map((section) => (
              <div
                key={section.category}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#0a192f] mb-4 pb-3 border-b-2 border-[#148d8d]">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-gray-700 hover:text-[#148d8d] transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-[#148d8d] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:font-medium transition-all">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-r from-[#148d8d]/10 to-[#d4af37]/10 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-[#0a192f] mb-3">Can't find what you're looking for?</h3>
            <p className="text-gray-700 mb-4">
              Contact our team for assistance or reach out through our contact form.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#148d8d] text-white px-6 py-2 rounded hover:bg-[#0f6d6d] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
