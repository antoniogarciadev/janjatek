"use client";
import Numbers from "@/ui/numbersBox";
import Reveal from "@/ui/reveal";
import Weekdays from "@/ui/weekdays";

interface box {
  id: number;
  count: number;
  text: string;
}

const numb: box[] = [
  { id: 1, count: 10, text: "Projetos Personalizados" },
  { id: 2, count: 2, text: "Anos Inovando" },
  { id: 3, count: 8, text: "Clientes Ativos" },
];

const time = { count: 24, day: 7, text: "Suporte 24/7" } as const;

export default function Times() {
  return (
    <section>
      <div className="container h-100 lg:h-[300px] flex items-center  flex-col lg:flex-row justify-around gap-4 mx-auto">
        <Reveal className="flex w-full flex-col lg:flex-row items-center justify-around gap-4 ">
          {numb.map((box: box) => (
            <Numbers
              id={box.id}
              key={box.id}
              count={box.count}
              text={box.text}
            />
          ))}

          <Weekdays count={time.count} day={time.day} text={time.text} />
        </Reveal>
      </div>
    </section>
  );
}
