import Move from "./move.enum";

interface ISquare {
  fillContent(move: Move);
}

export default ISquare;
