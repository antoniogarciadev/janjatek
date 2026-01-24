"use client";

import { Cards } from "@/types/types";
export default function CardCaroucel({ icon, title, text }: Cards) {
  const Icon = icon;

  return (
    <div className="h-60 bg-white px-6 py-6 space-y-2 rounded-2xl hover:scale-105 transition border hover:border-(--color-purple)">
      <div className="w-full h-28 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-[11pt]">
        <Icon size={22} />
        {title}
      </div>

      <h1 className="font-semibold">{title}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
}
