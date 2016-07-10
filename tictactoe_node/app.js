/* Todo
1. Map board with an object. done
2. Take user input. done
2. Mark board function to update the board. done
3. Update board. done
4. Player Turns done
5. Winning combos.
 	- List. done

6. Logic
 	- End game when win occurs. done
 	- End game when tie occurs. done
 	-Update board done

 7. Exit on End of Game in Progress.
 8. Style board in done.

 Computer
 1. Change input of player move to Math.random() && 1-9


*/
'use strict';
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let player = 'X';
const WIN = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let moved = 0;

let board = {
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9'
};


let showBoard = () => {
	console.log(
"   " +
board[1] + " | " + board[2] + " | " + board[3] + "\n" +
"   " + "---------" + "\n" +
"   " + board[4] + " | " + board[5] + " | " + board[6] + "\n" +
"   " + "---------" + "\n" +
"   " + board[7] + " | " + board[8] + " | " + board[9] + "\n"

);
}


rl.prompt();


showBoard();


rl.on('line', (line) => {
	
		if(player === 'X') {
			playerMove(line);
			player = 'O';
		} else {
			computerMove();
			player = 'X';
		}

		moved += 1;
		gameStatusCheck();

}).on('close', () => {
  console.log('Thanks for playing! Have a great day!');
  process.exit(0);
});



let gameStatusCheck = () => {

	for(let i = 0; i < WIN.length; i++) {
		let count = 0;
		
		for(let j = 0; j < WIN[i].length; j++) {

			if(board[WIN[i][j]] === player) {
				count += 1;

				if(count === 3) {
					console.log('Winner! player: ' + player);
					return;
				}

			}
		}
	}

	if(moved === 9) {
		console.log('Tie! Try again!');
		
	}
}

let playerMove = (line) => {
	
	makeMove(line);
	showBoard();
	
}

let computerMove = () => {
	
	let move = Math.ceil(Math.random() * 9);

	while(board[move] === 'X' || board[move] === 'O') {
		move = Math.ceil(Math.random() * 9);
	}
	playerMove(move);
}



let makeMove = (space) => {
	return board[space] = player;
};