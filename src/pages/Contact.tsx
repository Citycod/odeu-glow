import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(`
    Name: ${formData.name}
    Email: ${formData.email}
    Project Type: ${formData.projectType}
    Budget: ${formData.budget}
    Message: ${formData.message}
  `);

  const mailtoLink = `mailto:mailto:asukwooduo@gmail.com?subject=${subject}&body=${body}`;

  // Opens the user's email client
  window.location.href = mailtoLink;
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed project discussions',
      value: 'asukwooduo@gmail.com',
      href: 'mailto:asukwooduo@gmail.com',
      color: 'bg-blue-500',
      delay: 0.1
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Direct conversation',
      value: '+234 812 345 6789',
      href: 'tel:+2348123456789',
      color: 'bg-blue-600',
      delay: 0.2
    },
    // {
    //   icon: MessageCircle,
    //   title: 'WhatsApp',
    //   description: 'Quick chat & updates',
    //   value: 'Start Conversation',
    //   href: 'https://wa.me/2348123456789',
    //   color: 'bg-blue-700',
    //   delay: 0.3
    // },
    {
      icon: Calendar,
      title: 'Schedule',
      description: 'Book a consultation',
      value: '30-min meeting',
      href: 'https://calendly.com/oduojunior',
      color: 'bg-blue-800',
      delay: 0.4
    }
  ];

  const projectTypes = [
    'Sport Documentary Series',
    'Branded Sport Campaigns',
    'Freelance Editorial services',
    'Match/Events Coverage & Recaps',
    'Scriptwriting',
    'Reputations & PR Wrting',
    'Team Training & Workshops',
    'Other Project Type'
  ];

  const budgetRanges = [
    'Less than $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'To be discussed'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your vision into reality? Let's discuss how we can collaborate 
              to create impactful solutions that drive your business forward.
            </p>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: method.delay }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-blue-100 p-6 text-center transition-all duration-300"
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{method.description}</p>
                <p className="text-blue-600 font-medium text-sm">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Start Your Project</h2>
                <p className="text-gray-600 text-lg">
                  Share your project details and I'll get back to you with a comprehensive proposal.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-black rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-black rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white text-black"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border text-black border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-black rounded-xl border text-black border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Brief description of your project"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 text-black rounded-xl text-black border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    placeholder="Please describe your project goals, timeline, challenges, target audience, and any specific requirements..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Project Brief
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Response Time Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Response Time</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Standard Inquiries</span>
                  <span className="text-blue-600 font-semibold">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Urgent Projects</span>
                  <span className="text-green-600 font-semibold">Same Day</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Complex Proposals</span>
                  <span className="text-orange-600 font-semibold">2-3 Business Days</span>
                </div>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Location & Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Lagos, Nigeria</p>
                    <p className="text-gray-500 text-sm">Available for remote collaboration worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">Business Hours</p>
                    <p className="text-gray-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Availability */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Current Availability</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-blue-500/30">
                  <span>New Projects</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-500/30">
                  <span>Consultations</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Open</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Team Workshops</span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Limited</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/portfolio" 
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium">View Portfolio</span>
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white transition-colors" />
                  </div>
                </Link>
                <Link 
                  to="/about" 
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium">About Me</span>
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white transition-colors" />
                  </div>
                </Link>
                <a 
                  href="mailto:hello@oduojunior.com" 
                  className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 group"
                >
                  <span className="font-medium">Quick Email</span>
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 