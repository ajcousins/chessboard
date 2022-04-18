import React from 'react';
import styled from 'styled-components';
import BlackPawn from '../../piece_svgs/BlackPawn';
import WhitePawn from '../../piece_svgs/WhitePawn';
import BlackRook from '../../piece_svgs/BlackRook';
import WhiteRook from '../../piece_svgs/WhiteRook';
import BlackKnight from '../../piece_svgs/BlackKnight';
import WhiteKnight from '../../piece_svgs/WhiteKnight';
import BlackBishop from '../../piece_svgs/BlackBishop';
import WhiteBishop from '../../piece_svgs/WhiteBishop';
import BlackQueen from '../../piece_svgs/BlackQueen';
import WhiteQueen from '../../piece_svgs/WhiteQueen';
import BlackKing from '../../piece_svgs/BlackKing';
import WhiteKing from '../../piece_svgs/WhiteKing';

const BOARD_SIZE = 60;

const Overlay = styled.div`
  // background-color: #ff000033;
  // position: absolute;
  max-width: ${BOARD_SIZE}em;
  min-width: ${BOARD_SIZE}em;
  height: ${BOARD_SIZE}em;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  x: number;
  y: number;
}

export const PieceWrapper = styled.div<Props>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

export default function Pieces() {
  return (
    <Overlay>
      <PieceWrapper x={0} y={0}>
        <BlackKnight boardsize={BOARD_SIZE} />
      </PieceWrapper>

      <PieceWrapper x={45} y={45}>
        <WhitePawn boardsize={BOARD_SIZE} />
      </PieceWrapper>
    </Overlay>
  );
}

/*
NEXT STEPS
- Need a function that parses FEN notation, and returns an array of activePieces on board with their letter coords.
- Need a function that translates letter coords into xy coords.
- Pieces component should map through activePieces array.
*/