import { createInitialBoard, getPieceSymbol } from "@/chessUtils";
import type { Board } from "@/types";
import { useEffect, useState } from "react";

export default function PlayChess() {
  const [chessBoard, setChessBoard] = useState<Board>();

  useEffect(() => {
    setChessBoard(createInitialBoard);
  }, []);

  if (chessBoard == undefined) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className="grid grid-cols-8 w-[800px] h-[800px] border-4 border-gray-800">
        {chessBoard.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`flex items-center justify-center w-[99px] h-[99px]
              ${(rowIndex + colIndex) % 2 === 0 ? "bg-white" : "bg-gray-500"}`}
            >
              {piece && (
                <span className="text-2xl">
                  {getPieceSymbol(piece.type, piece.color)}
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
