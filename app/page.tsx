'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import EcosystemSection from './components/EcosystemSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ParticleNetwork from './components/ParticleNetwork';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-cyber-dark">
      <ParticleNetwork />
      <Navbar />
      <Hero />
      <ServicesGrid />
      <EcosystemSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
