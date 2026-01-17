// Import de componete
import CardCarrocel from "@/ui/cardCaroucel";
import { PenSquareIcon, Earth, Settings, Building2, Shield, BadgeDollarSign } from "lucide-react";

// Tipo de dados dos meus cards
import { Cards } from "@/types/types";

export default function Partners() {
  // Informações dos meus cards
  const cards: Cards[] = [
    {
      icon: PenSquareIcon,
      title: "Ponto&Vírgula",
      text: "Estratégica",
    },
    {
      icon: Earth,
      title: "Mwafrica",
      text: "Expansão",
    },
    {
      icon: Settings,
      title: "Control JP",
      text: "Controle",
    },
    {
      icon: Building2,
      title: "Gov. Namibe",
      text: "Institucional",
    },
    {
      icon: Shield,
      title: "HakyOFF",
      text: "Segurança",
    },
    {
      icon: BadgeDollarSign,
      title: "Afrimoney",
      text: "Financeira",
    },
  ];

  return (
    <section className="w-full h-screen max-h-(--max-height)" id="parthers">
      <div className="mx-auto flex flex-col gap-8 items-center justify-center  w-[85%] max-w-[1366px] h-full">
        <div className="w-138 flex flex-col items-center space-y-3">
          <h1 className="text-(--color-title) text-4xl font-semibold">
            Parceiros Estratégicos
          </h1>
          <p className="text-center text-[20px]">
            Alianças para inovação contínua.
          </p>
        </div>

        <CardCarrocel cards={cards} />
      </div>
    </section>
  );
}
