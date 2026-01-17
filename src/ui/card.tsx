import Image from "next/image";
import Button from "./button";

import { card } from "@/types/types";

export default function Card({ imageUrl, alt, title, text, button }: card) {
  return (
    <div
      className={`group w-65 h-85 bg-white px-8 py-8 space-y-3 rounded-2xl hover:scale-105 overflow-hidden transition-all duration-500`}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-linear-to-r from-(--color-purple) to-(--color-blue-cyan) transition-all duration-400 ease-in-out group-hover:w-full"></div>

      <Image
        src={imageUrl}
        alt={alt}
        width={64}
        className="group-hover:rotate-360 transition-all duration-500"
      />

      <h1 className="text-2xl font-medium">{title}</h1>

      <p>{text}</p>

      {button && <Button label={button} />}
    </div>
  );
}
