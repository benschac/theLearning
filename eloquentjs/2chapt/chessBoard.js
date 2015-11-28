	'use strict';


  function chessBoard(n) {
      var board = '';
     for(var i = 0; i <= n; i++) {
      for(var j = 0; j <= n; j++) {
          if((j + i) % 2 === 0) {
            board += '#'
          } else {
            board += ' ';
          }
      }
       board += '\n';
     }
      
      console.log(board);
    }

chessBoard(8);