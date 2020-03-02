import Move from "./move.enum";
import ISquare from './square.interface';

class Square implements ISquare {
  private content: Move;

  // constructor params can be nullabe using x?: number or have default values using x: number = 0
  constructor(public x: number, public y: number) {
    console.log (this.x, this.y);
  }

  fillContent(move: Move): void {
    this.content = move;
  }

  getContent(): Move {
    return this.content;
  }
}

export default Square;
