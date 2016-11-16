// es6 solution.

'use strict';




// Non-Functional
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


// Functional  credit: hsubox
let chessBoard = (type1 = " ", type2 = "#", size = 8) => {
  let dimension = [...Array(8).keys()];
  let board = dimension.map(x => {
    return dimension.map(y => {
      return ( (x + y) % 2 === 0 ) ? type1 : type2;
    }).join("");
  }).join("\n");
  console.log(board);
}

chessBoard();
