# Chessboard

A WIP Chess application.

## Setup
Install: `npm install`

Run locally: `npm start`

## Learning Goals
- Learn about other deployment methods on AWS.
- Is there a way to outsource chess engine calls to serverless backend? Might need if engine is (likely) written in something that's not TypeScript. Make a chess engine API for application?
## Application Goals
#### Stage 1
- [x] Display pieces on board.
- [ ] Be able to parse FEN notation.
- [ ] Be able to drag and drop pieces to other squares.
- [ ] Enable capturing of pieces.

#### Stage 2
- [ ] Limit actions to legal moves only.
- [ ] Intergrate a chess engine to evaluate positions.

#### Nice to have
- [ ] Control panel for displaying and navigating through moves list.

#### Deployment
- [ ] Deploy using an unfamiliar (but free/ cheap) technology: AWS Lamda?