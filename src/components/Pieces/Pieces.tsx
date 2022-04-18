import React from 'react';
import styled from 'styled-components';
import charToFileNum from '../../helpers/charToFileNum';
import WhitePieces from '../../piece_svgs/WhitePieces';
import BlackPieces from '../../piece_svgs/BlackPieces';

const BOARD_SIZE = 30;

interface Props {
  x: number;
  y: number;
}

export const PieceWrapper = styled.div<Props>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

interface Iprops {
  placement: Piece[];
}

export default function Pieces({ placement }: Iprops) {
  return (
    <>
      {placement.map((piece: Piece) => {
        const x = charToFileNum(piece.letterCoord.slice(0, 1)) - 1;
        const y = Number(piece.letterCoord.slice(1)) * -1 + 8;
        const unit = BOARD_SIZE * 2;

        return (
          <PieceWrapper x={x * unit} y={y * unit}>
            {piece.colour === 'white' ? (
              <WhitePieces boardsize={BOARD_SIZE} pieceType={piece.name} />
            ) : (
              <BlackPieces boardsize={BOARD_SIZE} pieceType={piece.name} />
            )}
          </PieceWrapper>
        );
      })}
    </>
  );
}
