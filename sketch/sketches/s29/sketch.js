// Sketch 29 - JAN. 29: Draw a "perfectly random" grid where every row contains exactly one duplicate color
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let cellSize = 30;
    let cols, rows;

    p.setup = function(){
      p.createCanvas(NP, NP);
      cols = p.floor(NP / cellSize);
      rows = p.floor(NP / cellSize);

      p.noStroke();

      // Generate grid with one duplicate per row
      for (let row = 0; row < rows; row++) {
        let colors = [];

        // Generate random colors for this row
        for (let col = 0; col < cols; col++) {
          colors.push(p.color(p.random(255), p.random(255), p.random(255)));
        }

        // Pick a random color to duplicate
        let duplicateIndex = p.floor(p.random(cols));
        let duplicateColor = colors[duplicateIndex];

        // Find another random position for the duplicate
        let secondIndex = p.floor(p.random(cols));
        while (secondIndex === duplicateIndex) {
          secondIndex = p.floor(p.random(cols));
        }
        colors[secondIndex] = duplicateColor;

        // Draw the row
        for (let col = 0; col < cols; col++) {
          p.fill(colors[col]);
          p.rect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }

      // Add grid lines for clarity
      p.stroke(255, 255, 255, 50);
      p.strokeWeight(1);
      for (let x = 0; x <= NP; x += cellSize) {
        p.line(x, 0, x, NP);
      }
      for (let y = 0; y <= NP; y += cellSize) {
        p.line(0, y, NP, y);
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
