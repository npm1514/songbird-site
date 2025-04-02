import Hero from "@/app/components/Hero";
import WhoWeAre from "@/app/components/WhoWeAre";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Awards from "@/app/components/Awards";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="sm:mx-12 move-smooth">
      <Hero />
      <WhoWeAre />
      <Services />
      <Portfolio />
      <Awards />
      <Testimonials />
      <Contact />
    </main>
  );
}
