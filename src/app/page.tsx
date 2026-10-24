import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton
        label="Abrir conversa no WhatsApp"
        variant="floating"
        className="lg:hidden"
      />
    </>
  );
}
