import { motion } from 'framer-motion';
import { FileText, Users, CheckCircle, Plane, Award, Calendar, Globe, Briefcase } from 'lucide-react';

const pathwaySteps = [
    {
        step: '01',
        icon: FileText,
        title: 'Initial Consultation',
        description: 'Share your profile and career goals with our expert counselors',
        duration: '1-2 days',
    },
    {
        step: '02',
        icon: Users,
        title: 'Profile Assessment',
        description: 'We evaluate your skills and match you with suitable opportunities',
        duration: '2-3 days',
    },
    {
        step: '03',
        icon: Briefcase,
        title: 'Job Matching',
        description: 'Get connected with verified employers matching your profile',
        duration: '5-10 days',
    },
    {
        step: '04',
        icon: FileText,
        title: 'Documentation',
        description: 'Complete assistance with all required documents and certifications',
        duration: '7-14 days',
    },
    {
        step: '05',
        icon: Globe,
        title: 'Visa Processing',
        description: 'End-to-end visa application and embassy support',
        duration: '30-90 days',
    },
    {
        step: '06',
        icon: Award,
        title: 'Pre-Departure Training',
        description: 'Cultural orientation and job-specific training programs',
        duration: '3-5 days',
    },
    {
        step: '07',
        icon: Plane,
        title: 'Travel & Deployment',
        description: 'Flight booking, airport assistance, and smooth deployment',
        duration: '1-2 days',
    },
    {
        step: '08',
        icon: CheckCircle,
        title: 'Post-Arrival Support',
        description: 'Ongoing support to ensure your successful settlement abroad',
        duration: 'Ongoing',
    },
];

export function PerfectPathway() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#148d8d]/10 text-[#148d8d] text-sm font-medium rounded-full mb-4">
                        Your Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                        The Perfect Pathway to Your Dream Job
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A clear, transparent process from application to deployment - we're with you every step of the way
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#148d8d] via-[#d4af37] to-[#148d8d] transform -translate-x-1/2" />

                    {/* Steps */}
                    <div className="space-y-12">
                        {pathwaySteps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#148d8d]">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-gradient-to-br from-[#148d8d] to-[#0a192f] rounded-xl flex items-center justify-center">
                                                    <item.icon className="w-7 h-7 text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-4xl font-bold text-[#148d8d]/20">{item.step}</span>
                                                    <h3 className="text-xl font-bold text-[#0a192f]">{item.title}</h3>
                                                </div>
                                                <p className="text-gray-600 mb-3">{item.description}</p>
                                                <div className="flex items-center gap-2 text-sm text-[#d4af37]">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="font-semibold">{item.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Dot (Desktop) */}
                                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-6 h-6 bg-[#d4af37] rounded-full border-4 border-white shadow-lg" />
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className={`hidden lg:block ${index % 2 === 0 ? '' : 'lg:col-start-1'}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 p-8 bg-gradient-to-r from-[#148d8d]/10 to-[#d4af37]/10 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold text-[#0a192f] mb-3">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Let us guide you through every step towards your international career
                    </p>
                    <a
                        href="/apply"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-[#148d8d] to-[#0a192f] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                        Begin Your Application
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
