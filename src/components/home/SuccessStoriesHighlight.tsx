import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

import { successStories as allStories } from '@/pages/SuccessStories';

// Take only the LAST 3 images for the highlight section
const successStories = allStories.slice(-3);

export function SuccessStoriesHighlight() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="success-stories" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] mb-4">
                        Success Stories
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Real achievements from real people who trusted P Cube Consulting
                    </p>
                </motion.div>

                {/* Success Stories Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedImage(story.image)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Full Image - No Text Overlay */}
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

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#148d8d] hover:bg-[#0a192f] text-white group"
                    >
                        <Link to="/success-stories" className="flex items-center gap-2">
                            View More Stories
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <img
                                    src={selectedImage}
                                    alt="Success Story Full View"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
