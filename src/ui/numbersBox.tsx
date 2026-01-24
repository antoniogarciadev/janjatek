import Counter from "./counter";

type cards = {
  id: number;
  count: number;
  text: string;
};

export default function Numbers({ id, count, text }: cards) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center" key={id}>
      <h1 className="text-violet-500 text-2xl lg:text-4xl font-bold">
        <Counter end={count} />+
      </h1>
      <p className="text-sm sm:text-lg">{text}</p>
    </div>
  );
}
