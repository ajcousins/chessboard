import React, { useRef, useEffect } from 'react';
import { BoardStyle, SquareStyle } from './Board.style';
import Pieces from '../Pieces';

interface Square {
  isLight: boolean;
  coord: string;
}

const fileNumToChar = (num: number): string => String.fromCharCode(96 + num);

// Initiate squares
const squares: Square[] = [];
for (let rank = 8; rank > 0; rank--) {
  for (let file = 1; file < 9; file++) {
    squares.push({
      isLight: (rank + file) % 2 !== 0,
      coord: `${fileNumToChar(file)}${rank}`,
    });
  }
}

export default function Board() {
  const sqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Don't actually need this anymore for piece placement. But could come in handy later.
    console.log('sqRefs:', sqRefs);
  });

  return (
    <BoardStyle>
      {squares.map((square, i) => (
        <SquareStyle
          isLight={square.isLight}
          id={square.coord}
          ref={(el: any) => (sqRefs.current[i] = el)}
        ></SquareStyle>
      ))}
      <Pieces />
    </BoardStyle>
  );
}
