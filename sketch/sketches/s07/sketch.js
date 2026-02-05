// Sketch 07 - JAN. 7: Generate order that mutates randomly
(function(){
  window.createSketch = function(p){
    const NP = 600;
    const gridSize = 10;
    let grid = [];

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.colorMode(p.HSB, 360, 100, 100);

      // Initialize ordered grid
      for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
          grid[i][j] = {
            x: i,
            y: j,
            hue: (i * gridSize + j) * (360 / (gridSize * gridSize))
          };
        }
      }
    };

    p.draw = function(){
      p.background(20);

      const cellSize = NP / gridSize;

      // Draw the grid
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const cell = grid[i][j];
          p.fill(cell.hue, 70, 80);
          p.noStroke();
          p.rect(i * cellSize, j * cellSize, cellSize - 2, cellSize - 2);
        }
      }

      // Randomly mutate the order
      if (p.frameCount % 30 === 0) {
        const i1 = Math.floor(p.random(gridSize));
        const j1 = Math.floor(p.random(gridSize));
        const i2 = Math.floor(p.random(gridSize));
        const j2 = Math.floor(p.random(gridSize));

        // Swap two cells
        const temp = grid[i1][j1];
        grid[i1][j1] = grid[i2][j2];
        grid[i2][j2] = temp;
      }
    };
  };
})();
