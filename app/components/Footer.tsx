'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@adtivio.com' },
    { icon: Phone, label: 'Phone', value: '+1-555-0123' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <footer className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-cyber-midnight/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold gradient-text">Adtivio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering the future of programmatic advertising with data-driven strategies and maximum scalability.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-neon-violet transition-colors">Services</a></li>
              <li><a href="#ecosystem" className="hover:text-neon-violet transition-colors">Ecosystem</a></li>
              <li><a href="#contact" className="hover:text-neon-violet transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-center gap-3 text-gray-400 text-sm hover:text-neon-violet transition-colors">
                    <Icon size={16} className="text-neon-violet flex-shrink-0" />
                    <span>{info.value}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Adtivio. All rights reserved. | Engineered with precision | Powered by programmatic excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
