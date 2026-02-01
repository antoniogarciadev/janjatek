"use client";
import Numbers from "@/ui/countersContain";
import RevealGrid from "@/components/animations/revealGrids";
import Weekdays from "@/ui/weekdays";

interface counterType {
  id: number;
  end: number;
  text: string;
}

const numb: counterType[] = [
  { id: 1, end: 10, text: "Projetos Personalizados" },
  { id: 2, end: 2, text: "Anos Inovando" },
  { id: 3, end: 8, text: "Clientes Ativos" },
];

const time = { end: 24, day: 7, text: "Suporte 24/7" } as const;

export default function Times() {
  return (
    <section>
      <div className="container h-100 lg:h-[300px] flex items-center flex-col lg:flex-row justify-around gap-4 mx-auto">
        <RevealGrid className="flex w-full flex-col lg:flex-row items-center justify-around gap-4 ">
          {numb.map((box: counterType) => (
            <Numbers
              id={box.id}
              key={box.id}
              end={box.end}
              text={box.text}
            />
          ))}

          <Weekdays end={time.end} day={time.day} text={time.text} />
        </RevealGrid>
      </div>
    </section>
  );
}
