import React from 'react';
import styled from 'styled-components';

const BOARD_SIZE = 30;
const LIGHT_SQUARE = '#ebebd3';
const DARK_SQUARE = '#749454';

const Style = styled.div`
  background-color: red;
  width: ${BOARD_SIZE}em;
  height: ${BOARD_SIZE}em;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  isLight: boolean;
}

const CellStyle = styled.div<Props>`
  background-color: ${(props) => (props.isLight ? LIGHT_SQUARE : DARK_SQUARE)};
  width: ${BOARD_SIZE / 8}em;
  height: ${BOARD_SIZE / 8}em;
`;

interface Cell {
  isLight: boolean;
  coord: string;
}

const fileNumToChar = (num: number): string => String.fromCharCode(64 + num);

const cells: Cell[] = [];
for (let rank = 8; rank > 0; rank--) {
  for (let file = 1; file < 9; file++) {
    cells.push({
      isLight: (rank + file) % 2 === 0,
      coord: `${fileNumToChar(file)}${rank}`,
    });
  }
}

export default function Board() {
  return (
    <Style>
      {cells.map((cell) => (
        <CellStyle isLight={cell.isLight} id={cell.coord} />
      ))}
    </Style>
  );
}
