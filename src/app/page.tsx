import Hero from "@/features/lading/section/hero";
import Times from "@/features/lading/section/times";
import Services from "@/features/lading/section/services";
import Products from "@/features/lading/section/products";
import Clients from "@/features/lading/section/clients";
import Partners from "@/features/lading/section/partners";
import Vision from "@/features/lading/section/vision";
import Contact from "@/features/lading/section/contact";
import Intro from "@/ui/intro";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 items-center justify-center mx-auto">
      <Intro/>
      <Hero />
      <Times/>
      <Services/>
      <Products/>
      <Clients/>
      <Partners/>
      <Vision/>
      <Contact/>
    </main>
  );
}
