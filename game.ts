class Game {  
  state: GameState;

  public startGame() {
    this.state = <GameState>{
      generation: 0,
      totalBorn: 0,
      totalDeceased: 0,
      grid: []
    };

    // Initialize all cells
    for(let x = 0; x < 10; x++) {
      for(let y = 0; y < 10; y++) {
        this.state.grid.push({x: x, y: y, alive: false})
      }
    }

    // Start the game loop
    setInterval(this.tick, 500);
  }

  private tick() {
    this.update();
    this.draw();  
  }

  private update() {
    // Make a copy of gamestate

    // Update the new generation, looking at every cell in the copy of previous generation.

    // Have new generation 
  }

  private draw() {

  }
}

interface GameState {
  grid: Cell[]

  // Add stats and display them, like generation number, total counts of deceased, born, etc.
  // Potentially add functionality to select different starting positions, or click cells and then a start button.
}

interface Cell {
  x: number;
  y: number;

  alive: boolean;
}
