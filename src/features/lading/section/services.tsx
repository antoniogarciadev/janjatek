// Imports das imagens
import Lightning from "@/assets/icons/lightning-icon.png";
import Shield from "@/assets/icons/shield-icon.png";
import Robot from "@/assets/icons/robot-icon.png";
import Reload from "@/assets/icons/reload-icon.png";

// Import de componete
import Card from "@/ui/card";

// Tipo de dados dos meus cards
import { card } from '@/types/types';

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
    <section id="services" className="w-full h-screen max-h-(--max-height)">
      <div className="mx-auto flex flex-col gap-8 pt-8 items-center justify-center  w-[85%] max-w-[1366px] h-full">
        <div className="w-138 flex flex-col items-center space-y-3">
          <h1 className="text-(--color-title) text-4xl font-semibold">Serviços</h1>
          <p className="text-center text-[20px]">
            Soluções emergentes adaptadas ao seu negócio, com foco em eficiência
            e inovação.
          </p>
        </div>

        <div className=" h-[60%] py-10 flex items-center justify-around gap-6 transition-all duration-500 ease-in-out">
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
      </div>
    </section>
  );
}
