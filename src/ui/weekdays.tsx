"use client";

import Counter from "../components/animations/counter";

type Props = {
  end: number;
  day: number;
  text: string;
};

export default function Weekdays({ end, day, text }: Props) {
  // export default function Weekdays(count: number,  day : number, text: string) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-(--primary) text-2xl lg:text-4xl font-bold">
        <Counter end={end} />/<Counter end={day} />
      </h1>
      <p className="text-sm sm:text-lg">{text}</p>
    </div>
  );
}
