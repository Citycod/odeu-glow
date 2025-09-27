import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
      value: 'hello@oduojunior.com',
      href: 'mailto:hello@oduojunior.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/oduojunior',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/oduojunior',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/oduojunior',
      color: 'hover:text-gray-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent font-medium mb-4 block">GET IN TOUCH</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-glass border border-glass-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-glass transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/70">{info.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              
              <div className="flex gap-4">
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
                    className={`w-12 h-12 rounded-lg bg-glass border border-glass-border flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a great conversation about media innovation and product strategy.
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