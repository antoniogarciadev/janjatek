import Image from "next/image";
import Janjatek from "@/assets/image/logo-janjatek.png";

export default function Intro() {
  return (
    <section className="reveal w-full h-screan bg-white z-50 absolute inset-0 flex items-center justify-center ani-appear gap-30">
      <div className="ani-intro">
        <h1 className="text-blue-900 text-6xl font-bold">Janajatek</h1>
        <p className="text-(--color-purple-2) text-3xl  tracking-wider">Da imaginação ao produto</p>
      </div>
      <div className="ani-intro">
        <Image src={Janjatek} alt="Janjatek" className="w-64 h-64"/>
      </div>
    </section>
  );
}
