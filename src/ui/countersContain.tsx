import Counter from "../components/animations/counter";

type counters = {
  id: number;
  end: number;
  text: string;
};

export default function Numbers({ id, end, text }: counters) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center" key={id}>
      <h1 className="text-(--primary) text-2xl lg:text-4xl font-bold">
        <Counter end={end} />+
      </h1>
      <p className="text-sm sm:text-lg">{text}</p>
    </div>
  );
}
