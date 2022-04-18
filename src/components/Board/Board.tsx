import React, { useRef, useEffect, useState } from 'react';
import { BoardStyle, SquareStyle } from './Board.style';
import Pieces from '../Pieces';
import { fileNumToChar, fenToArr } from '../../helpers';

interface Square {
  isLight: boolean;
  coord: string;
}

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
  const [piecePlacement, setPiecePlacement] = useState<Array<Piece>>([]);
  const sqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Don't actually need this anymore for piece placement. But could come in handy later.
    console.log('sqRefs:', sqRefs);
  });

  useEffect(() => {
    // On first render. Load starting poistion.
    setPiecePlacement(
      fenToArr('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    );
    console.log('piecePlacement:', piecePlacement);
  }, []);

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
