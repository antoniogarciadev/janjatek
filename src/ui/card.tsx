import Image from "next/image";
import Button from "./button";

import { card } from "@/types/types";

export default function Card({ imageUrl, alt, title, text, button }: card) {
  return (
    <div
      className={`group w-full sm:w-full lg:w-full h-60 sm:h-70 min-[669px]:h-80 lg:h-100 bg-white px-6 lg:px-8 py-6 lg:py-8 space-y-2 rounded-2xl hover:scale-103 lg:hover:scale-105 shadow hover:shadow-lg overflow-hidden transition-all duration-500`}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-linear-to-r from-(--color-purple) to-(--color-blue-cyan) transition-all duration-400 ease-in-out group-hover:w-full"></div>

      <Image
        src={imageUrl}
        alt={alt}
        // width={64}
        className="group-hover:rotate-360 transition-all duration-500 w-[58px]"
      />

      <h1 className="text-2xl sm:text-[12pt] lg:text-2xl font-medium text-black">{title}</h1>

      <p className=" text-sm md:text-[12pt] tracking-wide">{text}</p>

      {button && <Button label={button} style="min-[580px]:w-30 bg-violet-500" />}
    </div>
  );
}
