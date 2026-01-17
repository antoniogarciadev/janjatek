import Image from "next/image";
import Logotipo from "@/assets/image/logo-janjatek.png";
import Video from "@/ui/video";
import ButtonPurple from "@/ui/buttonPurple";
import ButtonWhite from "@/ui/buttonWhite";

export default function Hero(){

  return (
    <section className="w-full h-screen relative mx-auto flex items-center justify-center" id="hero">

      <Video videoUrl="video-mar.mp4"/>

      <div className="grid grid-cols-2 gap-2.5 w-[85%] max-w-[1366px] content-center place-content-center  relative">
        <div className="w-full h-full py-19">
          <article className="flex flex-col w-full  items-start gap-5 mx-auto">
            <h1 className="text-(--color-purple) text-[14pt] font-semibold tracking-widest ani-scale">DA IMAGINAÇÃO AO PRODUTO</h1>
            <h2 className="text-(--color-purple-2) text-3xl  tracking-wider">
              Soluções Emergentes
            </h2>

            <p className="text-white">
              Na Janjatek, focamos em soluções emergentes e personalizadas para
              cada cliente ou negócio. Desnvolvemos softwares sob medida, com
              ênfase em segurança digital, controle e proteção de dados no setor
              de segurança, além de automação avançada, incluindo soluções para
              o setor automotivo com controle total.
            </p>

            <div className="flex gap-2 pl-3">

              <ButtonPurple text={"Explorar Soluções"} link="#services" classes="bg-(--color-purple) ani-move-around"/>

              <ButtonWhite text="Ver Serviços" link="#products"/>

            </div>
          </article>
        </div>

        <div className="w-full h-full relative flex py-19 justify-center">
          <div className="w-[350px] h-[300px] relative ani-move-up">
            <Image
              src={Logotipo}
              alt="logo"
              fill
              quality={100}
              className="object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
