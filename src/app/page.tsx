import Intro from "@/ui/intro";
import Hero from "@/features/lading/section/hero";
import Times from "@/features/lading/section/counterSection";
import Services from "@/features/lading/section/services";
import Products from "@/features/lading/section/products";
import Clients from "@/features/lading/section/clients";
import Partners from "@/features/lading/section/partners";
import Vision from "@/features/lading/section/vision";
import About from "@/features/lading/section/about";

export default function Home() {
  return (
    <div>
      <Intro/>
      <Hero />
      <Times/>
      <Services/>
      <Products/>
      <Clients/>
      <Partners/>
      <About/>
      <Vision/>
    </div>
  );
}
