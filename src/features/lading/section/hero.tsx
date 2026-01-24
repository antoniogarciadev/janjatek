import Image from "next/image";
import Logotipo from "@/assets/image/logo-janjatek.png";
import Video from "@/ui/video";
import ButtonPurple from "@/ui/buttonPurple";
import ButtonWhite from "@/ui/buttonWhite";

export default function Hero() {
  return (
    <section
      className="w-full h-200 md:h-180 lg:h-screen relative mx-auto flex items-center justify-center"
      id="hero">
      <Video videoUrl="video-mar.mp4" />

      <div className="w-[99%] sm:w-[85%] grid grid-cols-1 min-[900px]:grid-cols-2 gap-3 lg:gap-2.5 max-w-[1366px] content-center place-content-center relative pt-40 sm:pt-30 lg:pt-20">
        <div className="w-[95%] h-full flex items-center justify-center mx-auto">
          <article className="flex flex-col w-full items-center justify-center lg:items-start gap-3 lg:gap-5 mx-auto space-y-1">
            <h1 className="text-(--color-purple) text-[13pt] md:text-[14pt] text-center md:text-left font-semibold tracking-widest ani-scale">
              DA IMAGINAÇÃO AO PRODUTO
            </h1>

            <h2 className="text-violet-500 text-2xl sm:text-3xl text-center md:text-left tracking-wider">
              Soluções Emergentes
            </h2>

            <p className="text-white lg:text-lg text-center md:text-left ">
              Na Janjatek, focamos em soluções emergentes e personalizadas para
              cada cliente ou negócio. Desnvolvemos softwares sob medida, com
              ênfase em segurança digital, controle e proteção de dados no setor
              de segurança, além de automação avançada, incluindo soluções para
              o setor automotivo com controle total.
            </p>

            <div className="flex flex-col w-full min-[580px]:flex-row items-center justify-center lg:justify-start gap-2 min-[580px]:gap-4 mx-auto">
              <ButtonPurple text={"Explorar Soluções"} link="#services" />

              <ButtonWhite text="Ver Serviços" link="#products" />
            </div>
          </article>
        </div>

        <div className="w-full h-full relative flex py-10 lg:py-19 justify-center">
          <div className="w-[300px] lg:w-[350px] h-[250px] lg:h-[300px] relative ani-move-up">
            <Image
              src={Logotipo}
              alt="logo"
              fill
              quality={100}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
