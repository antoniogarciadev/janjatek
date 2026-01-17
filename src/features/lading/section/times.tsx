import Numbers from "@/ui/numbersBox";

interface box {
  id: number;
  count: string;
  text: string;
}

const numb: box[] = [
  { id: 1, count: "10", text: "Projetos Personalizados" },
  { id: 2, count: "2", text: "Anos Inovando" },
  { id: 3, count: "8", text: "Clientes Ativos" },
  { id: 4, count: "24/7", text: "Suporte 24/7" },
];

export default function Times() {
  return (
    <section className="w-full h-[300px] flex items-center justify-center">
      <div className="flex w-[90%] flex-row items-center justify-around gap-4">
        {numb.map((box: box) => (
          <Numbers id={box.id} key={box.id} count={box.count} text={box.text} />
        ))}
      </div>
    </section>
  );
}
