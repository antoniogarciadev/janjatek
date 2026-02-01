import Button from "./button";

import { cardsType } from "@/types/types";

export default function Card({ icon, title, text, button, animation }: cardsType) {
  const Icon = icon;
  return (
    <div
      className={`group w-full sm:w-full lg:w-full h-60 sm:h-70 min-[669px]:h-70 lg:h-80 flex flex-col items-center justify-center bg-white px-6  py-6 space-y-2 rounded-2xl hover:scale-103 lg:hover:scale-105 shadow hover:shadow-lg overflow-hidden transition-all duration-500`}>

      <Icon
        className={`group-hover:scale-140 transition-all duration-500 w-[58px] mx-auto ${animation}`}
      />

      <h1 className="text-2xl sm:text-[12pt] lg:text-2xl font-medium text-center text-black">
        {title}
      </h1>

      <p className=" text-sm md:text-[12pt] text-center">{text}</p>

      {button && (
        <Button
          label={button}
          style="bg-black hover:text-cyan-500 flex-end lg:h-10 -mb-5"
        />
      )}
    </div>
  );
}
