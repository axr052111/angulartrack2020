import Move from "./move.enum";

interface ISquare {
  fillContent(move: Move, canvas: HTMLCanvasElement, squaresize: number);
}

export default ISquare;
