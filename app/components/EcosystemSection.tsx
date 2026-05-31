'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Radio, TV } from 'lucide-react';

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState('dsp');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    {
      id: 'dsp',
      name: 'Demand-Side Platform',
      icon: Zap,
      description:
        'Our proprietary DSP harnesses machine learning to automate advertiser audience targeting and bidding strategies. Real-time algorithmic buying ensures optimal CPM discovery while maximizing conversion rates through sophisticated audience segmentation and predictive modeling.',
      features: [
        'Automated Audience Targeting',
        'ML-Powered Bidding Engines',
        'Real-Time Algorithmic Buying',
        'Predictive Performance Modeling',
        'Custom Audience Segmentation',
      ],
    },
    {
      id: 'ssp',
      name: 'Supply-Side Platform',
      icon: Radio,
      description:
        'Empower publishers with complete inventory control and yield optimization. Our SSP delivers real-time private auctions, header bidding integration, and advanced floor pricing strategies to maximize publisher revenue while maintaining premium inventory quality.',
      features: [
        'Publisher Inventory Controls',
        'Yield Optimization Engine',
        'Real-Time Private Auctions',
        'Advanced Floor Pricing',
        'Header Bidding Integration',
      ],
    },
    {
      id: 'ctv',
      name: 'Connected TV & In-App Media',
      icon: TV,
      description:
        'Revolutionize premium streaming advertising with household-level targeting. Reach audiences across Apple TV, Fire TV, Roku, and premium mobile in-app environments with precision tracking, brand-safe placements, and cross-device attribution.',
      features: [
        'Household-Level Targeting',
        'Multi-Platform Coverage',
        'Brand-Safe Placements',
        'Cross-Device Attribution',
        'Premium In-App Environments',
      ],
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const TabIcon = activeTabData?.icon || Zap;

  return (
    <section
      id="ecosystem"
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
            <span className="gradient-text">The Future of Adtivio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Programmatic Advertising Ecosystem - Demand, Supply & Premium Streaming
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-cyber text-white glow-primary'
                    : 'glassmorphic text-gray-300 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {tab.name}
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTabData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glassmorphic p-8 md:p-12 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                  <TabIcon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activeTabData.name}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {activeTabData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTabData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-neon-violet"></div>
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EcosystemSection;
