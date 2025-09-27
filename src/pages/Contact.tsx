import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
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
      title: 'Email Me',
      description: 'Send me a detailed message',
      value: 'hello@oduojunior.com',
      href: 'mailto:hello@oduojunior.com',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: Phone,
      title: 'Call Me',
      description: 'Let\'s have a conversation',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-accent to-accent-glow'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick and convenient chat',
      value: 'Message me directly',
      href: 'https://wa.me/15551234567',
      color: 'from-primary-dark to-primary'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      value: 'calendly.com/oduojunior',
      href: 'https://calendly.com/oduojunior',
      color: 'from-accent-glow to-primary-glow'
    }
  ];

  const projectTypes = [
    'Product Strategy Consultation',
    'Digital Transformation',
    'UX/UI Design Project',
    'Data Analytics Implementation',
    'Media Platform Development',
    'Team Training & Workshops',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Create Something{' '}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Ready to transform your ideas into impactful solutions? I'd love to hear about 
              your project and explore how we can work together to achieve your goals.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-3">{method.description}</p>
                <p className="text-accent font-medium text-sm">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Main Contact Form */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-2">Tell me about your project</h2>
              <p className="text-foreground/70 mb-8">
                The more details you provide, the better I can understand your needs and 
                provide a tailored solution.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Let's discuss your product strategy needs"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project goals, timeline, challenges, and what success looks like to you..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full hero-button flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Response Time */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-foreground/70">Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-foreground/70">Urgent projects: Same day</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </h3>
              <p className="text-foreground/70 mb-2">Lagos, Nigeria</p>
              <p className="text-sm text-foreground/60">
                Available for remote collaboration worldwide. 
                Local meetings available in Lagos area.
              </p>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">Current Availability</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/70">New Projects</span>
                  <span className="text-green-500 font-medium">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Consultations</span>
                  <span className="text-green-500 font-medium">Open</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Workshops</span>
                  <span className="text-accent font-medium">Limited</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/portfolio" 
                  className="block w-full px-4 py-2 text-center border border-glass-border rounded-lg hover:bg-glass transition-colors duration-300"
                >
                  View Portfolio
                </Link>
                <Link 
                  to="/about" 
                  className="block w-full px-4 py-2 text-center border border-glass-border rounded-lg hover:bg-glass transition-colors duration-300"
                >
                  Learn About Me
                </Link>
                <a 
                  href="mailto:hello@oduojunior.com" 
                  className="block w-full hero-button text-center"
                >
                  Quick Email
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