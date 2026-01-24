// Import de componete
"use client";

import WaterBackground from "@/ui/waterBackground";
import Button from "@/ui/button";

import Reveal from "@/ui/reveal";

export default function Vision() {
  return (
    <section
      className="relative w-full min-[1380px]:w-screen h-120 lg:h-screen lg:max-h-(--max-height) bg-blue-500"
      id="vision">

      <div className=" relative z-10 w-[95%] h-full mx-auto flex items-center justify-center">
        <Reveal>
          <div className="w-full flex flex-col items-center space-y-8">
            <h1 className="text-white text-2xl lg:text-4xl font-semibold">
              Visão do Futuro
            </h1>
            <p className=" text-white text-center text-sm lg:text-[18px] tracking-wider md:w-2/4">
              Na Janjatek, imaginamos um futuro onde a tecnologia transcende
              limites, integrando inteligência artificial, automação avançada e
              segurança digital em uma experiência imersiva e interativa. Explore
              nossa visão em 360° e descubra como estamos moldando o amanhã
            </p>
            <div className="relative flex flex-col w-full min-[580px]:flex-row items-center justify-center gap-2 min-[580px]:gap-4 mx-auto">
              <Button
                label="Fale conosco"
                style="relative w-full min-[580px]:w-40 bg-black transition-all duration-400 hover:shadow-lg before:content-[''] hover:before:bg-purple-600 before:transitio-all before:origin-center before:duration-400 before:ease-in-out before:rounded-md before:w-0 hover:before:w-full before:h-full before:absolute before:-z-10"
              />
              <Button
                label="Portfolio"
                style="bg-transparent border-2 border-white py-[10px] text-white hover:bg-white hover:text-(--color-text) hover:opacity-none min-[580px]:w-30"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <WaterBackground />

    </section>
  );
}
