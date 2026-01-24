'use client'

import Counter from "./counter";

type Props = {
    count: number,
    day: number,
    text: string,
};

export default function Weekdays({ count, day, text}: Props) {
// export default function Weekdays(count: number,  day : number, text: string) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-violet-500 text-2xl lg:text-4xl font-bold">
        <Counter end={count} />/<Counter end={day} />
      </h1>
      <p className="text-sm sm:text-lg">{text}</p>
    </div>
  );
}
