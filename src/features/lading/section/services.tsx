import { Lightbulb, ShieldCheck, Bot, RefreshCw } from "lucide-react";
import { cardsType } from "@/types/types";
import Reveal from "@/components/animations/reveal";

export default function Services() {
  const cards: cardsType[] = [
    {
      icon: Lightbulb,
      title: "Soluções Emergentes",
      text: "Implementamos softwares urgentes para resolver problemas imediatos, personalizados ao fluxo do seu negócio.",
      animation: "group-hover:text-yellow-500",
    },
    {
      icon: ShieldCheck,
      title: "Segurança Digital",
      text: "Desenvolvemos soluções para o setor de segurança: controle, proteção de dados e auditorias avançadas.",
      animation: "group-hover:text-green-500",
    },
    {
      icon: Bot,
      title: "Automação Avançada",
      text: "Softwares de automação, incluindo controle total no sector automotivo e outros para otimização completa.",
      animation: "group-hover:text-violet-500 group-hover:animate-bounce",
    },
    {
      icon: RefreshCw,
      title: "Janjatek Labs",
      text: "Um serviço que transforma dados das operações das empresas em decisões estratégicas e ações prática.",
      animation: "group-hover:text-blue-500  group-hover:animate-spin",
    },
  ];

  return (
    <section id="services">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 lg:space-y-30 pt-20 lg:pt-30 h-full  lg:h-screen lg:max-h-(--max-height)">

        <Reveal>
          <div className="w-4/5 lg:w-138 flex flex-col items-center space-y-3 mx-auto">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold">
              Serviços
            </h1>
            <p className="text-center md:text-[18px]">
              Soluções emergentes adaptadas ao seu negócio, com foco em
              eficiência e inovação.
            </p>
          </div>
        </Reveal>

        <Reveal>
        <div className="w-[90%] h-full lg:h-[60%] mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-around gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group w-full sm:w-full lg:w-full h-60 sm:h-70 min-[669px]:h-70 flex flex-col items-center justify-center bg-(--cards) border-2 border-white/40 hover:border-(--primary) text-white px-6 lg:px-2 py-6 lg:py-2  space-y-2 rounded-2xl hover:scale-103 lg:hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-zinc-500/70`}>
                <card.icon
                  className={`text-(--primary) group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto ${card.animation}`}
                  /* ${card.title == "Automação Avançada" && "group-hover:animate-bounce"}*/
                />

                <h1 className="text-2xl lg:text-[15pt] font-medium text-center ">
                  {card.title}
                </h1>

                <p className="text-sm md:text-[11pt] text-center">
                  {card.text}
                </p>
              </div>
            ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
