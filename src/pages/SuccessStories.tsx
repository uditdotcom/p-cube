import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { CheckCircle, Quote, Star, Award, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const successStories = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Chef',
        country: 'Dubai, UAE',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
        story: 'I got my work visa approved in just 45 days! P Cube Consulting handled everything from documentation to interview preparation. Now I\'m working at a 5-star hotel in Dubai.',
        visaType: 'Work Visa',
        processingTime: '45 days',
        rating: 5,
        date: 'January 2026',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Hotel Manager',
        country: 'London, UK',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
        story: 'The team was incredibly supportive throughout my visa process. They guided me at every step and I received my UK work permit within 2 months. Highly recommended!',
        visaType: 'Work Permit',
        processingTime: '60 days',
        rating: 5,
        date: 'December 2025',
    },
    {
        id: 3,
        name: 'Amit Patel',
        role: 'Restaurant Supervisor',
        country: 'Singapore',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
        story: 'P Cube made my dream come true! From finding the right job to getting my visa approved, they were with me every step. I\'m now settled in Singapore with my family.',
        visaType: 'Employment Pass',
        processingTime: '30 days',
        rating: 5,
        date: 'November 2025',
    },
    {
        id: 4,
        name: 'Sneha Reddy',
        role: 'Front Office Executive',
        country: 'Australia',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
        story: 'The visa process seemed daunting, but P Cube simplified everything. Their expertise in Australian immigration helped me get my visa in record time!',
        visaType: 'Skilled Worker Visa',
        processingTime: '90 days',
        rating: 5,
        date: 'October 2025',
    },
    {
        id: 5,
        name: 'Vikram Singh',
        role: 'Executive Chef',
        country: 'Canada',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
        story: 'Professional, efficient, and caring - that\'s P Cube Consulting! They helped me secure a position at a top restaurant in Toronto and handled all visa formalities.',
        visaType: 'Work Permit',
        processingTime: '75 days',
        rating: 5,
        date: 'September 2025',
    },
    {
        id: 6,
        name: 'Anita Desai',
        role: 'Housekeeping Manager',
        country: 'Qatar',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita',
        story: 'I was skeptical at first, but P Cube exceeded all my expectations. Quick visa approval, excellent job placement, and ongoing support even after arrival!',
        visaType: 'Work Visa',
        processingTime: '40 days',
        rating: 5,
        date: 'August 2025',
    },
];

const SuccessStories = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#0a192f] to-[#148d8d] py-20 text-white">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <Award className="w-16 h-16 mx-auto mb-6 text-[#d4af37]" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Success Stories
                            </h1>
                            <p className="text-xl text-gray-300">
                                Real stories from real people who achieved their dreams with P Cube Consulting
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white border-b">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-[#148d8d] mb-2">5000+</div>
                                <div className="text-gray-600">Visas Approved</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#148d8d] mb-2">25+</div>
                                <div className="text-gray-600">Countries</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#148d8d] mb-2">98%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#148d8d] mb-2">45</div>
                                <div className="text-gray-600">Avg. Days</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories Grid */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {successStories.map((story, index) => (
                                <motion.div
                                    key={story.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-[#148d8d] to-[#0a192f] p-6 text-white">
                                        <div className="flex items-center gap-4 mb-4">
                                            <img
                                                src={story.image}
                                                alt={story.name}
                                                className="w-16 h-16 rounded-full border-4 border-white/20"
                                            />
                                            <div>
                                                <h3 className="font-bold text-lg">{story.name}</h3>
                                                <p className="text-sm text-gray-200">{story.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <MapPin className="w-4 h-4" />
                                            <span>{story.country}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <Quote className="w-8 h-8 text-[#d4af37] mb-4" />
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            "{story.story}"
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Visa Type:</span>
                                                <span className="font-semibold text-[#0a192f]">{story.visaType}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Processing Time:</span>
                                                <span className="font-semibold text-[#148d8d]">{story.processingTime}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Date:</span>
                                                <span className="font-semibold">{story.date}</span>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1 pt-4 border-t">
                                            {[...Array(story.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-[#0a192f] to-[#148d8d] text-white">
                    <div className="container text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-[#d4af37]" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Write Your Success Story?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join thousands of successful candidates who achieved their international career dreams
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#b8952b] text-[#0a192f]">
                                    <Link to="/apply">Apply Now</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    <Link to="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default SuccessStories;
