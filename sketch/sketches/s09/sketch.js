// Sketch 09 - JAN. 9: Draw a grid where every cell is empty
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(240);

      // Draw grid lines - cells are all empty
      p.stroke(100);
      p.strokeWeight(1);

      const cellSize = 40;
      const cols = Math.floor(NP / cellSize);
      const rows = Math.floor(NP / cellSize);

      // Draw vertical lines
      for (let i = 0; i <= cols; i++) {
        p.line(i * cellSize, 0, i * cellSize, NP);
      }

      // Draw horizontal lines
      for (let j = 0; j <= rows; j++) {
        p.line(0, j * cellSize, NP, j * cellSize);
      }

      // Label emphasizing emptiness
      p.noStroke();
      p.fill(150);
      p.textSize(14);
      p.textAlign(p.CENTER);
      p.text('Every cell is empty', NP / 2, NP - 20);

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
