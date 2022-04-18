import styled from 'styled-components';

const BOARD_SIZE = 60;
const LIGHT_SQUARE = '#ebebd0';
const DARK_SQUARE = '#779455';

interface Props {
  isLight: boolean;
  ref: any;
}

export const BoardStyle = styled.div`
  position: relative;
  background-color: red;
  max-width: ${BOARD_SIZE}em;
  min-width: ${BOARD_SIZE}em;
  height: ${BOARD_SIZE}em;
  display: flex;
  flex-wrap: wrap;
`;

export const SquareStyle = styled.div<Props>`
  background-color: ${(props) => (props.isLight ? LIGHT_SQUARE : DARK_SQUARE)};
  width: ${BOARD_SIZE / 8}em;
  height: ${BOARD_SIZE / 8}em;
`;
