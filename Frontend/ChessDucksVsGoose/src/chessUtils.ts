import type { Board, PieceType, Color } from "./types";

export const createInitialBoard = (): Board => {
  const createRow = (color: Color, pieces: PieceType[]) =>
    pieces.map((type) => ({ type, color }));

  let createdBoard = [
    createRow("black", [
      "rook",
      "knight",
      "bishop",
      "queen",
      "king",
      "bishop",
      "knight",
      "rook",
    ]),
    Array(8).fill({ type: "pawn", color: "black" }),
    ...Array.from({ length: 4 }, () => Array(8).fill(null)),
    Array(8).fill({ type: "pawn", color: "white" }),
    createRow("white", [
      "rook",
      "knight",
      "bishop",
      "queen",
      "king",
      "bishop",
      "knight",
      "rook",
    ]),
  ];

  return createdBoard;
};

export const getPieceSymbol = (type: PieceType, color: Color) => {
  const symbols = {
    white: {
      king: "♔",
      queen: "♕",
      rook: "♖",
      bishop: "♗",
      knight: "♘",
      pawn: "♙",
    },
    black: {
      king: "♚",
      queen: "♛",
      rook: "♜",
      bishop: "♝",
      knight: "♞",
      pawn: "♟",
    },
  };
  return symbols[color][type];
};
