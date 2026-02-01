// Import de componete
"use client";

import WaterBackground from "@/components/animations/waterBackground";
import Button from "@/ui/button";

import Reveal from "@/components/animations/reveal";

export default function Vision() {
  return (
    <section
      className="relative h-120 lg:h-screen lg:max-h-(--max-height) bg-blue-500"
      id="vision">

        
      <div className="container relative z-10 w-[95%] h-full mx-auto flex items-center justify-center">
        <Reveal>
          <div className="w-full flex flex-col items-center space-y-8">
            <h1 className="text-white text-2xl lg:text-4xl font-semibold">
              Visão do Futuro
            </h1>
            <p className=" text-white text-center text-sm lg:text-[18px] tracking-wider md:w-[90%] lg:w-[70%]  text-pretty">
              Na Janjatek, imaginamos um futuro onde a tecnologia transcende
              limites, integrando inteligência artificial, automação avançada e
              segurança digital em uma experiência imersiva e interativa.
              Explore nossa visão em 360° e descubra como estamos moldando o
              amanhã
            </p>
            <div className="relative flex flex-col w-full min-[580px]:flex-row items-center justify-center gap-2 min-[580px]:gap-4 mx-auto">
              <Button
                label="Fale conosco"
                style="relative min-[580px]:w-40 hover:text-black bg-transparent border-2 border-black overflow-hidden transition-all duration-400 before:content-[''] before:bg-black before:transitio-all before:duration-400 before:ease-in-out hover:before:translate-y-full before:translate-y-0 before:w-full before:h-20 before:absolute"
              />
              <Button
                label="Portfolio"
                style="relative bg-transparent border-2 border-white py-[10px] text-white min-[580px]:w-40 overflow-hidden before:content-[''] before:bg-black before:transitio-all before:duration-400 before:ease-in-out before:-translate-y-full hover:before:translate-y-0 before:w-full before:h-20 before:absolute"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <WaterBackground />
    </section>
  );
}
