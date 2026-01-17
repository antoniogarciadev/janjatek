import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";

export interface ItemData {
  icon: LucideIcon;
  label: string;
}

export interface card {
  id?: number;
  imageUrl: StaticImageData;
  alt: string;
  title: string;
  text: string;
  button?: string | false;
}

export interface Cards {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface button {
  icon?: LucideIcon;
  label: string;
  style?: string;
}
