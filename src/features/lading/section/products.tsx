"use client";
import Button from "@/ui/button";
import Reveal from "@/components/animations/reveal";
import { cardsType } from "@/types/types";
import { useState } from "react";
import {
  RotateCcwKey,
  MessagesSquareIcon,
  PieChart,
  LucidePhoneCall,
} from "lucide-react";

export default function Products() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const products: cardsType[] = [
    {
      icon: MessagesSquareIcon,
      title: "NoHere",
      text: "Comunicação segura e inteligente para empresas.",
      animation: "group-hover:text-violet-500",
      button: "Saber Mais",
    },
    {
      icon: PieChart,
      title: "PRESEU",
      text: "Revoluciona as operações das empresas, transformando dados em decisões inteligentes e instantâneas.",
      animation: "group-hover:text-green-500 ",
      button: "Saber Mais",
    },
    {
      icon: RotateCcwKey,
      title: "EXPRENTE",
      text: "Firewalls e proteção digital para setores críticos.",
      animation:
        "group-hover:text-yellow-500",
      button: "Saber Mais",
    },
    {
      icon: LucidePhoneCall,
      title: "Tualinha",
      text: "Conectividade avançada para instituições.",
      animation: "group-hover:text-blue-500",
      button: "Saber Mais",
    },
  ];

  return (
    <section id="products" className="">
      <div className="container h-full lg:max-h-(--max-height) mx-auto flex items-center justify-center space-y-8 lg:space-y-20 pt-20 lg:pt-30 flex-col gap-2">
        
        <Reveal>
          <div className="w-4/5 lg:w-138 flex flex-col items-center space-y-3 mx-auto">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold text-center">
              Produtos Inovadores
            </h1>

            <p className="text-center text-sm  md:text-[18px]">
              Plataformas que impulsionam negócios com segurança e automação.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-(--text-light) w-[90%] h-full mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-around gap-6">
            {products.map((item, index) => {
              const isActive0 = hoverIndex === 0 && index === 0;
              const isActive1 = hoverIndex === 1 && index === 1;
              const isActive2 = hoverIndex === 2 && index === 2;
              const isActive3 = hoverIndex === 3 && index === 3;
              return (
                <div
                  className={`group w-full sm:w-full lg:w-full h-60 sm:h-70 min-[669px]:h-70 flex flex-col items-center justify-center bg-(--card) border-2 border-white/40 hover:border-(--primary) px-6 lg:px-4 py-6 lg:py-2 space-y-2 rounded-2xl hover:scale-103 lg:hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-zinc-500/70`}
                  key={index}
                  onMouseEnter={() => {
                    setHoverIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                  }}>
                  <item.icon
                    className={`text-(--primary) group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto group-hover:animate-call 
                    ${item.animation}
                    ${isActive0 && "group-hover:animate-bounce"}
                    ${isActive1 && "ani-grow"}
                    ${isActive2 && "group-hover:-rotate-360"}
                    ${isActive3 && "ani-call"}
                    `}
                  />

                  <h1 className="text-2xl lg:text-[15pt] font-medium text-center">
                    {item.title}
                  </h1>

                  <p className="text-sm md:text-[11pt] text-center">
                    {item.text}
                  </p>

                  {item.button && (
                    <Button
                      label={item.button}
                      style="bg-(--primary) hover:bg-(--primary-hover) flex-end lg:h-10 -mb-5"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}