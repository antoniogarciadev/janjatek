import Image from "next/image";
import Logotipo from "@/assets/image/logo-janjatek.png";
import Video from "@/ui/video";
import ButtonIcon from "@/ui/buttonIcon";
import { Shapes } from "lucide-react";
import TypingTitle from "@/ui/typingTitle";

export default function Hero() {
  return (
    <section
      className="w-full h-screen relative mx-auto flex items-center justify-center"
      id="hero">
      <Video videoUrl="video-mar.mp4" />

      <div className="w-[99%] sm:w-[85%] grid grid-cols-1 min-[900px]:grid-cols-2 gap-3 lg:gap-2.5 max-w-[1366px] content-center place-content-center relative lg:pt-20">
        {/* logo section */}
        <div className="min-[900px]:hidden w-full h-[120px] relative flex justify-center">
          <div className="w-20 h-[100px] relative">
            <Image
              src={Logotipo}
              alt="logo"
              fill
              quality={100}
              className="object-contain ani-floating-small drop-shadow-lg drop-shadow-white/10 hover:drop-shadow-blue-500 hover:scale-110 transition-all duration-500"
              priority
            />
          </div>
        </div>

        <div className="w-[95%] h-full flex items-center justify-center mx-auto">
          <article className="flex flex-col w-full items-center justify-center min-[900px]:items-start gap-3 lg:gap-5 mx-auto space-y-1">

            <h1 className="text-blue-800 text-2xl sm:text-3xl text-center font-bold tracking-widest">Janjatek</h1>

            <TypingTitle />

            <p className="text-white lg:text-lg text-center md:text-left text-pretty">
              Na Janjatek, focamos em soluções emergentes e personalizadas para
              cada cliente ou negócio. Desnvolvemos softwares sob medida, com
              ênfase em segurança digital, controle e proteção de dados no setor
              de segurança, além de automação avançada, incluindo soluções para
              o setor automotivo com controle total.
            </p>

            <div className="flex flex-col w-full min-[580px]:flex-row items-center justify-center lg:justify-start gap-2 min-[580px]:gap-4 mx-auto">
              <ButtonIcon
                icon={Shapes}
                text={"Explorar Soluções"}
                link="#services"
                // className={`overflow-hidden 
                // before:content-[''] before:bg-black before:transitio-all before:duration-300 before:ease-in-out before:translate-y-full hover:before:translate-y-0 before:w-full before:h-20 before:absolute 
                // `}
              />
            </div>
          </article>
        </div>

        <div className="max-[900px]:hidden w-full h-full relative flex py-10 lg:py-19 justify-center">
          <div className="w-[300px] lg:w-[350px] h-[250px] lg:h-[300px] relative">
            <Image
              src={Logotipo}
              alt="logo"
              fill
              quality={100}
              className="object-contain ani-floating drop-shadow-lg drop-shadow-white/10 hover:drop-shadow-blue-500 hover:scale-110 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
