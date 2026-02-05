// Sketch 27 - JAN. 27: Animate a static grid
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let gridSize = 20;
    let cells = [];

    p.setup = function(){
      p.createCanvas(NP, NP);

      // Create a grid of cells
      for (let y = 0; y < NP; y += gridSize) {
        for (let x = 0; x < NP; x += gridSize) {
          cells.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            offsetX: 0,
            offsetY: 0,
            phase: p.random(p.TWO_PI)
          });
        }
      }
    };

    p.draw = function(){
      p.background(240);

      // Draw "static" grid that subtly animates
      p.stroke(0);
      p.strokeWeight(1);

      for (let cell of cells) {
        // Subtle wave animation
        cell.offsetX = p.sin(p.frameCount * 0.05 + cell.phase) * 3;
        cell.offsetY = p.cos(p.frameCount * 0.05 + cell.phase) * 3;

        // Pulsing opacity
        let alpha = p.map(p.sin(p.frameCount * 0.05 + cell.phase), -1, 1, 100, 255);

        p.fill(200, 200, 200, alpha);
        p.rect(
          cell.baseX + cell.offsetX,
          cell.baseY + cell.offsetY,
          gridSize,
          gridSize
        );
      }

      // Add text label
      p.fill(0);
      p.noStroke();
      p.textSize(12);
      p.text("Static Grid (or is it?)", 10, 20);
    };
  };
})();
