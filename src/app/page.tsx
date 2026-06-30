import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <WhyChoose />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <CTA />
    </>
  );
}
