// Import de componete
import CardCaroucel from "@/ui/cardCaroucel";

import { Cards } from "@/types/types";

import { Building, HandCoins, VanIcon, Store, Home,  } from "lucide-react";

// Tipo de dados dos meus cards

export default function Clients() {
  // Informações dos meus cards
  const cards: Cards[] = [
    {
      icon: Building,
      title: "Bizness Lda.",
      text: "Soluções empresariais",
    },
    {
      icon: HandCoins,
      title: "Banco Sol",
      text: "Financeira",
    },
    {
      icon: VanIcon,
      title: "MOBI Express",
      text: "Gestão de Frotas",
    },
    {
      icon: Store,
      title: "Mwafrica Store",
      text: "E-commerce",
    },
    {
      icon: VanIcon,
      title: "Urbanus",
      text: "Transportes",
    },
    {
      icon: Home,
      title: "Cirimoveis",
      text: "Imobiliário",
    },
  ];

  return (
    <section className="w-full h-screen max-h-(--max-height)" id="clients">
      <div className="mx-auto flex flex-col gap-8 items-center justify-center  w-[85%] max-w-[1366px] h-full">
        <div className="w-138 flex flex-col items-center space-y-3">
          <h1 className="text-(--color-title) text-4xl font-semibold">
            Nossos Clientes
          </h1>
          <p className="text-center text-[20px]">
            Negócios que crescem conosco.
          </p>
        </div>

        <CardCaroucel cards={cards} />

      </div>
    </section>
  );
}