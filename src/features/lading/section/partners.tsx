"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/animations/reveal";
import { caroucelType } from "@/types/types";
import {
  PenSquareIcon,
  Earth,
  Settings,
  Building2,
  Shield,
  BadgeDollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Partners() {
  const partners: caroucelType[] = [
    {
      icon: PenSquareIcon,
      title: "Ponto&Vírgula",
      text: "Estratégica",
      animation:
        "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
      style: "bg-blue-500",
      color: "group-hover:text-blue-500"
    },
    {
      icon: Earth,
      title: "Mwafrica",
      text: "Expansão",
      animation:
        "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
      style: "bg-blue-500",
      color: "group-hover:text-blue-500"
    },
    {
      icon: Settings,
      title: "Control JP",
      text: "Controle",
      animation:
        "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
      style: "bg-blue-500",
      color: "group-hover:text-blue-500"
    },
    {
      icon: Building2,
      title: "Gov. Namibe",
      text: "Institucional",
      animation:
        "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
      style: "bg-blue-500",
      color: "group-hover:text-blue-500"
    },
    {
      icon: Shield,
      title: "HakyOFF",
      text: "Segurança",
      animation:
        "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
      style: "bg-blue-500",
      color: "group-hover:text-blue-500"
    },
    {
      icon: BadgeDollarSign,
      title: "Afrimoney",
      text: "Financeira",
      animation:
        "group-hover:text-blue-500 group-hover:scale-140 transition-all duration-500 w-[58px]",
      style: "bg-blue-500",
      color: "group-hover:text-blue-500"

    },
  ];

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
    <section id="partners" className="container py-16 lg:pt-30 mx-auto mb-10">
      <div className="mx-auto px-4 space-y-10 h-full lg:max-h-(--max-height)">
        <Reveal>
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold">
              Nossos Parceiros
            </h1>
            <p className="text-center text-sm md:text-[18px]">
              Alianças para inovação contínua.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative">
            {/* VIEWPORT */}
            <div className="overflow-hidden" ref={emblaRef}>
              {/* TRACK */}
              <div className="flex">
                {partners.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_calc(100%/3)] lg:flex-[0_0_calc(100%/4)] h-70 px-3 content-center ">
                    <article
                      className={`rounded-2xl p-4 h-50 flex items-center text-white bg-(--cards) border-2 border-white/40 hover:border-(--primary) justify-center transition-all duration-500 hover:-translate-y-4 group shadow-lg hover:shadow-zinc-500/70`}>
                      <div className="w-full flex flex-col items-center justify-center space-y-3 mx-auto">
                        <item.icon className={`${item.animation}`} />

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
