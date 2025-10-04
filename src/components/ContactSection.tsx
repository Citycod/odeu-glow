import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, FileText, Send, Newspaper, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`
    Name: ${formData.name}
    Email: ${formData.email}
    Message: ${formData.message}
  `);

    const mailtoLink = `mailto:asukwooduo@gmail.com?subject=${subject}&body=${body}`;

    // Opens the user's email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'asukwooduo@gmail.com',
      href: 'mailto:asukwooduo@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 803 118 6486',
      href: 'tel:+2348031186486',
      description: 'Call or WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#',
      description: 'Based in Nigeria'
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/asukwo-oduo/',
      color: 'hover:bg-blue-500 hover:border-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/profoduo',
      color: 'hover:bg-blue-400 hover:border-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    },
    {
      icon: FileText,
      label: 'Portfolio',
      href: '/portfolio',
      color: 'hover:bg-green-500 hover:border-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
  ];

  const contactReasons = [
    {
      icon: Newspaper,
      title: 'Story Collaboration',
      description: 'Work on investigative pieces'
    },
    {
      icon: MessageCircle,
      title: 'Media Consultation',
      description: 'Content strategy advice'
    },
    {
      icon: Send,
      title: 'Editorial Projects',
      description: 'Writing assignments'
    }
  ];

  return (
    <section id="contact" className="py-8 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full shadow">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
            Let's Tell{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Great Stories
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Whether you have a story idea, need editorial expertise, or want to collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Reasons */}
            <div className="grid gap-3 mb-4">
              {contactReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{reason.title}</h4>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">Let's discuss your project</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-black rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-black rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-black rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                    placeholder="Story collaboration"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2.5 text-black rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your story idea..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-bold text-sm sm:text-base hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black mb-4">Contact Information</h3>
              
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base mb-1">{info.label}</div>
                      <div className="text-white/90 font-semibold text-sm mb-1">
                        {info.value}
                      </div>
                      <div className="text-white/70 text-xs">{info.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4">Connect With Me</h3>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border ${social.borderColor} ${social.bgColor} ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 group-hover:text-white mb-1 transition-colors duration-300" />
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors duration-300 text-center">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                  <MessageCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  Quick Response
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  I typically respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;