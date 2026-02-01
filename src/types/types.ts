import { LucideIcon } from "lucide-react";

export interface ItemData {
  icon: LucideIcon;
  label: string;
}

export interface caroucelType {
  icon: LucideIcon;
  title: string;
  text: string;
  animation?: string;
  style?: string;
  color?: string;
}

export interface cardsType {
  icon: LucideIcon;
  title: string;
  text: string;
  animation?: string;
  style?: string;
  button?: string | false;
}

export interface button {
  icon?: LucideIcon;
  label: string;
  style?: string;
}