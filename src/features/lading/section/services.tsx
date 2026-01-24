// Imports das imagens
import Lightning from "@/assets/icons/lightning-icon.png";
import Shield from "@/assets/icons/shield-icon.png";
import Robot from "@/assets/icons/robot-icon.png";
import Reload from "@/assets/icons/reload-icon.png";

// Import de componete
import Card from "@/ui/card";

// Tipo de dados dos meus cards
import { card } from "@/types/types";
import Reveal from "@/ui/reveal";

export default function Services() {
  const cards: card[] = [
    {
      id: 1,
      imageUrl: Lightning,
      alt: "Icone de foguete",
      title: "Soluções Emergentes",
      text: "Implementamos softwares urgentes para resolver problemas imediatos, personalizados ao fluxo do seu negócio.",
    },
    {
      id: 2,
      imageUrl: Shield,
      alt: "Icone de Escudo",
      title: "Segurança Digital",
      text: "Desenvolvemos soluções para o setor de segurança: controle, proteção de dados e auditorias avançadas.",
    },
    {
      id: 3,
      imageUrl: Robot,
      alt: "Icone de robo",
      title: "Automação Avançada",
      text: "Softwares de automação, incluindo controle total no sector automotivo e outros para otimização completa.",
    },
    {
      id: 4,
      imageUrl: Reload,
      alt: "Imagem de circulo carregando",
      title: "Janjatek Labs",
      text: "Um serviço que transforma dados das operações das empresas em decisões estratégicas e ações prática.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full h-full lg:h-screen lg:max-h-(--max-height) flex items-center justify-center lg:pt-10">
      <div className="mx-auto flex flex-col gap-6 items-center justify-center w-[90%] sm:w-[85%] max-w-[1366px] h-ful py-20">
        <Reveal className="">
          <div className="w-80 lg:w-138 flex flex-col items-center space-y-3">
            <h1 className="text-(--color-title) text-2xl lg:text-4xl font-semibold">
              Serviços
            </h1>
            <p className="text-center lg:text-[20px]">
              Soluções emergentes adaptadas ao seu negócio, com foco em
              eficiência e inovação.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full h-full lg:h-[60%] py-10 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-around gap-6">
            {cards.map((card) => (
              <Card
                imageUrl={card.imageUrl}
                alt={card.alt}
                key={card.id}
                title={card.title}
                text={card.text}
                button={false}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
