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
  canvas: HTMLCanvasElement;

  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }

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
    const ctx = this.canvas.getContext("2d");
    ctx.strokeStyle = "black";

    this.board.forEach(square => {
      const startX = square.x * SQUARESIZE;
      const startY = square.y * SQUARESIZE;
      ctx.strokeRect(startX, startY, SQUARESIZE, SQUARESIZE);
    });
  }

  handleClick(e: MouseEvent) {
    console.log(`user clicked in ${e.offsetX} , ${e.offsetY}`);
    let x = Math.floor(e.offsetX / SQUARESIZE);
    let y = Math.floor(e.offsetY / SQUARESIZE);

    const square = this.board.find(sq => sq.x === x && sq.y === y);
    square.fillContent(this.playerToMove, this.canvas, SQUARESIZE);
    // determine the coordinates of the cell the user clicked.
    // for that square, call fillContent.
    // Change the playerToMove.
    // bonus: check win condition
    // bonus: add a text of who is the winner
    // bonus: add a move counter
    // bonus: be creative.
  }

  private logState() {
    console.log(`Player to move: ${this.playerToMove}`);
    console.log("The board: " + this.board);
  }
}

const game = new Tictactoe();
game.newGame();
game.drawBoard();
