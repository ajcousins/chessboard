import { fileNumToChar } from '.';

export default function fenToArr(fen: string): Piece[] {
  const fenArr = fen.split(' ');

  // FEN string should contain 6 fields
  if (fenArr.length !== 6) return [];

  // piece placement field should contain 8 sections
  const piecePlacement = fenArr[0].split('/');
  if (piecePlacement.length !== 8) return [];

  // Piece array to build and return back
  const pieceArr: Piece[] = [];

  piecePlacement.forEach((rank, i) => {
    let curFile = 1;
    let rankString = rank;
    while (rankString.length > 0) {
      if (!isNaN(+rankString[0])) {
        // Increment file number by number specified
        curFile = curFile + Number(rankString[0]);
      } else {
        // Current FEN char is a piece
        const thisPiece = {
          colour: '',
          name: '',
          letterCoord: '',
        };

        if (rankString[0] === rankString[0].toLowerCase()) {
          thisPiece.colour = 'black';
        } else thisPiece.colour = 'white';

        switch (rankString[0].toLowerCase()) {
          case 'p':
            thisPiece.name = 'pawn';
            break;
          case 'n':
            thisPiece.name = 'knight';
            break;
          case 'b':
            thisPiece.name = 'bishop';
            break;
          case 'r':
            thisPiece.name = 'rook';
            break;
          case 'q':
            thisPiece.name = 'queen';
            break;
          case 'k':
            thisPiece.name = 'king';
        }
        thisPiece.letterCoord = `${fileNumToChar(curFile)}${i * -1 + 8}`;
        pieceArr.push(thisPiece);
        curFile++;
      }
      rankString = rankString.slice(1);
    }
  });
  return pieceArr;
}
