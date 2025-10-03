import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, FileText, Send, Newspaper, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://contactback-6rr0.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: '',
          budget: '',
        });
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error sending message. Please check your internet or try later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700 dark:text-gray-300">your@email.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700 dark:text-gray-300">+234 000 000 0000</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700 dark:text-gray-300">Lagos, Nigeria</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select Project Type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              rows={4}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-70"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
