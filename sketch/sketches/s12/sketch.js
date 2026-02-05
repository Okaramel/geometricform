// Sketch 12 - JAN. 12: Create a pattern where every repeated element is deliberately misaligned by one pixel
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(30);
      p.noStroke();

      const cols = 12;
      const rows = 12;
      const cellSize = NP / cols;

      // Draw repeated circles, each misaligned by 1 pixel
      let offsetX = 0;
      let offsetY = 0;

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = i * cellSize + cellSize / 2 + offsetX;
          const y = j * cellSize + cellSize / 2 + offsetY;

          p.fill(100 + i * 10, 150 + j * 8, 200);
          p.circle(x, y, cellSize * 0.6);

          // Deliberately misalign by 1 pixel each time
          offsetX += 1;
          offsetY += 1;
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
