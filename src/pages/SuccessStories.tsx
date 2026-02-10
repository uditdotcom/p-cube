import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Dynamically import all images from the success stories folder
const modules = import.meta.glob('@/assets/success/*.{jpg,jpeg,png,webp}', { eager: true });

// Convert the imported modules into the successStories array
export const successStories = Object.entries(modules).map(([path, mod]: [string, any], index) => ({
    id: index + 1,
    image: mod.default,
}));

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
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                                Our Success Stories
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Real achievements from real people who trusted P Cube Consulting with their dreams
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {successStories.map((story, index) => (
                                <motion.div
                                    key={story.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-auto overflow-hidden">
                                        <img
                                            src={story.image}
                                            alt={`Success Story ${story.id}`}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Info Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-12 text-center"
                        >
                            <p className="text-gray-500 italic">
                                More success stories coming soon...
                            </p>
                        </motion.div>
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
