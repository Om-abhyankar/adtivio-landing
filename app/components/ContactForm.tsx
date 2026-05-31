'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/myzqvpvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Ready to Elevate?</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Request a discovery call and explore how Adtivio can transform your advertising strategy
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="glassmorphic p-8 md:p-10 rounded-2xl"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center"
              >
                ✓ Thank you! We'll be in touch shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-transparent focus:border-neon-violet/50 focus:bg-white/10 transition-all peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-neon-violet transition-all bg-cyber-dark px-1">
                    Your Name
                  </label>
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-transparent focus:border-neon-violet/50 focus:bg-white/10 transition-all peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-neon-violet transition-all bg-cyber-dark px-1">
                    Email Address
                  </label>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-transparent focus:border-neon-violet/50 focus:bg-white/10 transition-all peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-neon-violet transition-all bg-cyber-dark px-1">
                    Company
                  </label>
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-transparent focus:border-neon-violet/50 focus:bg-white/10 transition-all peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-neon-violet transition-all bg-cyber-dark px-1">
                    Phone Number
                  </label>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={itemVariants} className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-transparent focus:border-neon-violet/50 focus:bg-white/10 transition-all peer resize-none"
                />
                <label className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-neon-violet transition-all bg-cyber-dark px-1">
                  Message
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-cyber text-white font-bold flex items-center justify-center gap-2 glow-primary hover:shadow-2xl transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
