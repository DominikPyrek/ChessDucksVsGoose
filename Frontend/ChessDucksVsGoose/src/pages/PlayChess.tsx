import { createInitialBoard, getPieceSymbol } from "@/chessUtils";
import type { Board, ChessPiece } from "@/types";
import { useState } from "react";
type Position = [number, number];

export default function PlayChess() {
  const [chessBoard, setChessBoard] = useState<Board>(createInitialBoard());
  const [draggedPiece, setDraggedPiece] = useState<{
    piece: ChessPiece;
    position: Position;
  } | null>(null);

  const handleDragStart = (row: number, col: number) => {
    setDraggedPiece({
      piece: chessBoard[row][col],
      position: [row, col],
    });
  };

  const handleDrop = (toRow: number, toCol: number) => {
    if (!draggedPiece) return;

    const [fromRow, fromCol] = draggedPiece.position;

    setChessBoard((prev) => {
      const newBoard = [...prev.map((row) => [...row])];
      newBoard[toRow][toCol] = draggedPiece.piece;
      newBoard[fromRow][fromCol] = null;
      return newBoard;
    });

    setDraggedPiece(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

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
              onDrop={() => handleDrop(rowIndex, colIndex)}
              onDragOver={handleDragOver}
            >
              {piece && (
                <span
                  className="text-7xl"
                  draggable="true"
                  onDragStart={() => handleDragStart(rowIndex, colIndex)}
                >
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
