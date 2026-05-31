import { AnimatedBackground } from "@/components/animated-background";
import { ContactBlock } from "@/components/contact-block";
import { FutureTabs } from "@/components/future-tabs";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ServicesGrid } from "@/components/services-grid";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-gradient-to-b from-slate-950 via-zinc-900 to-slate-950">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 pt-28 sm:px-8 lg:px-12">
        <HeroSection />
        <ServicesGrid />
        <FutureTabs />
        <ContactBlock />
      </main>
    </div>
  );
}
