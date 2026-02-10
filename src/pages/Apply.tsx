import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, FileText, CheckCircle2, ArrowRight, User, Mail, Phone, 
  Briefcase, MapPin, GraduationCap, Globe, Calendar
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Fill out the form with your details and upload your resume.',
  },
  {
    step: '02',
    title: 'Profile Review',
    description: 'Our team reviews your profile and matches you with suitable opportunities.',
  },
  {
    step: '03',
    title: 'Interview Process',
    description: 'Attend interviews with potential employers coordinated by our team.',
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Complete documentation and join your new role with our full support.',
  },
];

const experienceLevels = [
  'Fresher (0-1 years)',
  '1-3 years',
  '3-5 years',
  '5-8 years',
  '8-10 years',
  '10+ years',
];

const departments = [
  'Front Office',
  'Housekeeping',
  'Food & Beverage Service',
  'Kitchen / Culinary',
  'Restaurant Management',
  'Spa & Wellness',
  'Engineering & Maintenance',
  'Sales & Marketing',
  'Human Resources',
  'Finance & Accounts',
  'General Management',
  'Other',
];

const locations = [
  'India - Domestic',
  'Middle East (UAE, Qatar, Saudi Arabia)',
  'Southeast Asia (Singapore, Malaysia, Thailand)',
  'Europe',
  'Cruise Lines',
  'Maldives / Mauritius',
  'Any Location',
];

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    dob: '',
    nationality: '',
    department: '',
    experience: '',
    current_role: '',
    current_employer: '',
    preferred_location: '',
    availability: '',
    expected_salary: '',
    message: '',
    resume: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSelectChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== '') {
          form.append(key, value);
        }
      });

      // Send to your PHP endpoint
      const response = await fetch('https://pcubeconsulting.com/files/api/send-mail.php', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();

      if (result.status === 'success') {
        toast({
          title: "Application Submitted Successfully!",
          description: "Our team will review your profile and contact you shortly.",
        });
        
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          dob: '',
          nationality: '',
          department: '',
          experience: '',
          current_role: '',
          current_employer: '',
          preferred_location: '',
          availability: '',
          expected_salary: '',
          message: '',
          resume: null,
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An error occurred while submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
              Start Your Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Apply for Guest services <span className="text-gold">Opportunities</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Submit your application and let us connect you with exciting career opportunities 
              in hotels, resorts, cruise lines, and restaurants worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Application Form"
              title="Submit Your Profile"
              subtitle="Fill in your details below and our recruitment team will get in touch with suitable opportunities."
            />

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input 
                      id="first_name" 
                      placeholder="Enter your first name" 
                      required 
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name">Last Name *</Label>
                    <Input 
                      id="last_name" 
                      placeholder="Enter your last name" 
                      required 
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input 
                      id="dob" 
                      type="date" 
                      required 
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Input 
                      id="nationality" 
                      placeholder="e.g., Indian" 
                      required 
                      value={formData.nationality}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="mb-10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department / Position *</Label>
                    <Select value={formData.department} onValueChange={(value) => handleSelectChange('department', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map(dept => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level *</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map(level => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current_role">Current Role / Title</Label>
                    <Input 
                      id="current_role" 
                      placeholder="e.g., Sous Chef, Front Desk Executive" 
                      value={formData.current_role}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current_employer">Current Employer</Label>
                    <Input 
                      id="current_employer" 
                      placeholder="Current company name" 
                      value={formData.current_employer}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="mb-10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Job Preferences
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferred_location">Preferred Location *</Label>
                    <Select value={formData.preferred_location} onValueChange={(value) => handleSelectChange('preferred_location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map(loc => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability to Join</Label>
                    <Select value={formData.availability} onValueChange={(value) => handleSelectChange('availability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When can you join?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="15days">Within 15 days</SelectItem>
                        <SelectItem value="30days">Within 30 days</SelectItem>
                        <SelectItem value="60days">Within 60 days</SelectItem>
                        <SelectItem value="90days">Within 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="expected_salary">Expected Salary (per month)</Label>
                    <Input 
                      id="expected_salary" 
                      placeholder="e.g., ₹50,000 or $3,000" 
                      value={formData.expected_salary}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="mb-10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Resume / CV Upload
                </h3>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-2">
                    Drag and drop your resume here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                  <Input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    className="max-w-xs mx-auto" 
                    onChange={handleFileChange}
                  />
                  {formData.resume && (
                    <p className="text-sm text-primary mt-2">✓ {formData.resume.name}</p>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about yourself and your career goals</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share any additional information that might help us find the right opportunity for you..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 px-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
