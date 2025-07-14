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

export type PieceType =
  | "pawn"
  | "rook"
  | "knight"
  | "bishop"
  | "queen"
  | "king";
export type Color = "white" | "black";
export type ChessPiece = { type: PieceType; color: Color } | null;
export type Board = ChessPiece[][];
