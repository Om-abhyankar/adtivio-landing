'use client';

import { motion } from 'framer-motion';
import { BarChart3, Target, Zap, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ServicesGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Target,
      title: 'Meta Ads Mastery',
      description: 'Precision audience targeting, advanced creative optimization, and conversion-focused campaign management across Facebook and Instagram ecosystems.',
    },
    {
      icon: BarChart3,
      title: 'Google Ads Excellence',
      description: 'Search, Display, and Shopping campaigns optimized for maximum ROAS. Advanced bidding strategies with ML-driven performance analysis.',
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Unit economics breakdowns, attribution modeling, and comprehensive performance dashboards for data-driven decision making.',
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Algorithmic bid adjustments, dynamic budget allocation, and instant performance monitoring for maximum campaign efficiency.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Current Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            High-converting Meta and Google Ads solutions delivering measurable results
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group glassmorphic p-8 rounded-2xl hover:border-neon-violet/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
