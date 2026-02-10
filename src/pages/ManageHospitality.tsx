import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageHospitality = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 pt-20">
                {/* Hero Section */}
                <section className="bg-navy py-16 text-white">
                    <div className="container text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Manage Hospitality Work
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Streamline your recruitment, staffing, and operational management with our comprehensive solutions.
                        </p>
                    </div>
                </section>

                {/* Dashboard/Options Section */}
                <section className="py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Option 1: Hire Talent */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4">Hire Talent</h3>
                                <p className="text-gray-600 mb-6">
                                    Post requirements, search candidates, and manage your recruitment pipeline efficiently.
                                </p>
                                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                                    <Link to="/hire">
                                        Start Hiring <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Option 2: Corporate Solutions */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4">Partner With Us</h3>
                                <p className="text-gray-600 mb-6">
                                    Explore our corporate partnership programs for long-term staffing and management solutions.
                                </p>
                                <Button asChild variant="outline" className="w-full border-gold text-gold hover:bg-gold/10">
                                    <Link to="/contact">
                                        Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Option 3: Operational Support */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <ClipboardCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4">Operational Support</h3>
                                <p className="text-gray-600 mb-6">
                                    Access tools and resources for managing your hospitality workforce and compliance.
                                </p>
                                <Button asChild variant="secondary" className="w-full">
                                    <Link to="/services">
                                        View Services <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ManageHospitality;
