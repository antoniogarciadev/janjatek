import { Cards } from "@/types/types";

type Props = {
  cards: Cards[];
};

export default function CardCaroucel({ cards }: Props) {
  return (
    <div className="h-[50%] w-full flex items-center justify-center py-5 mx-auto overflow-x-auto carrousel-cotainer">
      
      <div className="group w-full flex items-center gap-8 transition-all ease carousel ml-10">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
          <div className={`group flex flex-col items-center w-70 min-w-[280px] h-60 bg-white px-6 py-6 space-y-2 rounded-2xl hover:scale-105 transition-all duration-500 border-(--color-purple) hover:border-2`}
            key={index}>
            <div className="w-full h-30 bg-gray-200 text-[11pt] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-(--color-purple)">
              <Icon size={24}/> {card.title}
            </div>

            <h1 className="text-black">{card.title}</h1>

            <p>{card.text}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}