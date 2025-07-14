import type { LucideIcon } from "lucide-react";

export type CardItem = {
  title: string;
  text: string;
  key_points?: string[];
  button_text: string;
  button_icon: LucideIcon;
  to: string;
};

export type HomePageCardGenProps = {
  items: CardItem[];
};
