// es6 solution.

'use strict';



let chessBoard = (type1 = " ", type2 = "#", size = 8) => {
  let board = "";

  for(let i = 0; i < size; i++) {
    // size of the board.

    for(let j = 0; j < size; j++) {
      // width of board.
      board += ( (j + i) % 2 === 0 ) ? type1 : type2;
    }

    board += "\n";
  }
  console.log(board);
}


chessBoard();
