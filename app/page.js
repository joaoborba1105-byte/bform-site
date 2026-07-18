import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import Science from "@/components/Science";
import Audience from "@/components/Audience";
import Results from "@/components/Results";
import Coach from "@/components/Coach";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <Process />
        <Science />
        <Audience />
        <Results />
        <Coach />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
