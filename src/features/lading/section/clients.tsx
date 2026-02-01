"use client";

import {
  Building,
  HandCoins,
  VanIcon,
  Store,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/animations/reveal";
import { caroucelType } from "@/types/types";

const clients: caroucelType[] = [
  {
    icon: Building,
    title: "Bizness Lda.",
    text: "Soluções empresariais",
    animation:
      "group-hover:text-red-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
    style: "bg-red-500",
    color: "group-hover:text-red-500",
  },
  {
    icon: HandCoins,
    title: "Banco Sol",
    text: "Financeira",
    animation:
      "group-hover:text-yellow-500 group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto",
    style: "bg-yellow-500",
    color: "group-hover:text-yellow-500",
  },
  {
    icon: VanIcon,
    title: "MOBI Express",
    text: "Gestão de Frotas",
    animation:
      "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto",
    style: "group-hover:bg-blue-500",
    color: "group-hover:text-blue-500",

  },
  {
    icon: Store,
    title: "Mwafrica Store",
    text: "E-commerce",
    animation:
      "group-hover:text-red-500 group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto",
    style: "bg-red-500",
    color: "group-hover:text-red-500",
  },
  {
    icon: VanIcon,
    title: "Urbanus",
    text: "Transportes",
    animation:
      "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto",
    style: "bg-blue-500",
    color: "group-hover:text-blue-500",
  },
  {
    icon: Home,
    title: "Cirimoveis",
    text: "Imobiliário",
    animation:
      "group-hover:text-yellow-500 group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto",
    style: "bg-yellow-500",
    color: "group-hover:text-yellow-500",
  },
];

export default function Clients() {
  // 🔥 plugin autoplay
  const autoplay = useRef(
    Autoplay({
      delay: 5000, // ⏱️ 5s
      stopOnInteraction: false, // continua após clique
      stopOnMouseEnter: true, // pausa no hover
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      containScroll: "trimSnaps",
      slidesToScroll: 1, // sempre 1 por vez (autoplay suave)
    },
    [autoplay.current],
  );

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="clients" className="container mx-auto py-16 pt-20 lg:pt-40 ">
      <div className="mx-auto px-4 space-y-10 h-full lg:max-h-(--max-height)">
        <Reveal>
          <div className="flex flex-col items-center space-y-3 mx-auto">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold">
              Nossos Clientes
            </h1>
            <p className="text-center text-sm md:text-[18px]">
              Negócios que crescem conosco e evoluem conosco.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative">
            {/* VIEWPORT */}
            <div className="overflow-hidden" ref={emblaRef}>
              {/* TRACK */}
              <div className="flex">
                {clients.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_calc(100%/3)] lg:flex-[0_0_calc(100%/4)] h-70 px-3 content-center">
                    <article
                      className={`rounded-2xl p-4 h-50 flex items-center  bg-(--cards) border-2 border-white/40 hover:border-(--primary) justify-center transition-all duration-500 hover:-translate-y-4 group shadow-lg hover:shadow-zinc-500/70`}>
                      <div className="w-full flex flex-col items-center justify-center space-y-3 mx-auto">
                        <item.icon className={`text-(--primary) ${item.animation}`} />

                        <div
                          className={`w-0 group-hover:w-2/4 h-0 group-hover:h-1 rounded-full transition-all duration-400 ease-in-out ${item.style}`}></div>

                        <h3 className="font-bold text-xl">
                          {item.title}
                        </h3>

                        <p className={`text-sm ${item.color}`}>{item.text}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            {/* BOTÕES */}
            <button
              onClick={scrollPrev}
              className="bg-white/70 hover:bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 -translate-y-1/2 top-1/2 z-10">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white/70 hover:bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 -translate-y-1/2 top-1/2 z-10">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
