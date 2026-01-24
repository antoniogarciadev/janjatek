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

import Reveal from "@/ui/reveal";

const clients = [
  {
    icon: <Building />,
    title: "Bizness Lda.",
    text: "Soluções empresariais",
  },
  {
    icon: <HandCoins />,
    title: "Banco Sol",
    text: "Financeira",
  },
  {
    icon: <VanIcon />,
    title: "MOBI Express",
    text: "Gestão de Frotas",
  },
  {
    icon: <Store />,
    title: "Mwafrica Store",
    text: "E-commerce",
  },
  {
    icon: <VanIcon />,
    title: "Urbanus",
    text: "Transportes",
  },
  {
    icon: <Home />,
    title: "Cirimoveis",
    text: "Imobiliário",
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
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 780px)": { slidesToScroll: 3 },
        "(min-width: 1024px)": { slidesToScroll: 4 },
      },
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
    <section className="container mx-auto h-130 py-16">
      <div className="mx-auto px-4 space-y-10">
        <Reveal>
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-(--color-title) text-4xl font-semibold">
              Nossos Clientes
            </h1>
            <p className="text-center text-[20px]">
              Negócios que crescem conosco.
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
                      <article className={`shadow-lg rounded-2xl p-6 space-y-4 h-[90%] flex items-center bg-white justify-center hover:scale-105 hover:border-2 hover:border-violet-500 group`}>
                        <div className="w-full flex flex-col gap-3">
                          <div className={`w-full h-28 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-[11pt] group-hover:border-violet-500`}>
                              {item.icon}
                            <h3 className="font-bold text-lg my-1">{item.title}</h3>
                          </div>
                          <div className="mx-auto flex flex-col items-center">
                            <h3 className="text-black text-xl my-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.text}</p>
                          </div>
                        </div>
                      </article>
                  </div>
                ))}
              </div>
            </div>
            {/* BOTÕES */}
            <button
              onClick={scrollPrev}
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 -translate-y-1/2 top-1/2 z-10">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 -translate-y-1/2 top-1/2 z-10">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
