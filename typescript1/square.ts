import Move from "./move.enum";
import ISquare from './square.interface';

class Square implements ISquare {
  private content: Move;

  // constructor params can be nullabe using x?: number or have default values using x: number = 0
  constructor(public x: number, public y: number) {
    console.log (this.x, this.y);
  }

  fillContent(move: Move, canvas: HTMLCanvasElement, squaresize: number): void {
    this.content = move;
    
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "red";

    const offset = squaresize / 2;
    ctx.beginPath();    
    ctx.arc(this.x * squaresize + offset, this.y * squaresize + offset, 0.4 * squaresize, 0, 2 * Math.PI);
    ctx.stroke();
  }

  getContent(): Move {
    return this.content;
  }
}

export default Square;
