import Image from "next/image";
import Janjatek from "@/assets/image/logo-janjatek.png";

export default function Intro() {
  return (
    <section className="reveal w-full h-screen bg-(--body) z-50 absolute inset-0 flex flex-col md:flex-row items-center justify-center px-5 gap-10 md:gap-20 mx-auto ani-appear">
      <div className=" flex flex-col items-center md:items-start gap-4 ani-intro">
        <h1 className="text-blue-900 text-5xl md:text-6xl font-bold">Janajatek</h1>
        <p className="text-2xl text-center md:text-3xl md:tracking-wider">Da imaginação ao produto</p>
      </div>
      <div className="ani-intro">
        <Image src={Janjatek} alt="Janjatek" className="w-42 h-42 md:w-64 md:h-64"/>
      </div>
    </section>
  );
}

// ani-appear
// "ani-intro
