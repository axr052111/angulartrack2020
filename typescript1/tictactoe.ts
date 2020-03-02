import Move from "./move.enum";
import Square from "./square";

const SQUARESIZE = 50;

interface ITictactoe {
  playerToMove: Move;
  board: Square[];

  newGame();
}

class Tictactoe implements ITictactoe {
  playerToMove: Move;
  board: Square[] = [];

  newGame() {
    // this.playerToMove = Math.round(Math.random())
    this.playerToMove = Move.X; // Set a player to Move. Math.Random

    // Initialize a 3x3 board
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        this.board.push(new Square(x, y));
      }
    }

    // Console.log the gamestate
    this.logState();
  }

  drawBoard() {
    const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'black';
    
    this.board.forEach(square => {
      const startX = square.x * SQUARESIZE;
      const startY = square.y * SQUARESIZE;
      ctx.strokeRect(startX, startY, SQUARESIZE, SQUARESIZE);
    });    
  }

  private logState() {
    console.log(`Player to move: ${this.playerToMove}`);
    console.log('The board: '+ this.board);
  }
}

var game = new Tictactoe();
game.newGame();
game.drawBoard();
// Click handler





