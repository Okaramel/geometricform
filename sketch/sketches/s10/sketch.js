// Sketch 10 - JAN. 10: Illustrate the exact midpoint between chaos and order as a neatly labeled SVG
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);

      const centerX = NP / 2;

      // Left side: CHAOS
      p.randomSeed(42);
      for (let i = 0; i < 200; i++) {
        const x = p.random(0, centerX - 20);
        const y = p.random(50, NP - 50);
        const size = p.random(2, 10);
        p.fill(p.random(255), p.random(255), p.random(255), 150);
        p.noStroke();
        p.circle(x, y, size);
      }

      // Right side: ORDER
      const gridSize = 20;
      p.fill(50, 100, 200);
      p.noStroke();
      for (let x = centerX + 40; x < NP - 20; x += gridSize) {
        for (let y = 60; y < NP - 40; y += gridSize) {
          p.rect(x, y, 8, 8);
        }
      }

      // Middle divider line
      p.stroke(0);
      p.strokeWeight(3);
      p.line(centerX, 0, centerX, NP);

      // Labels (SVG style)
      p.noStroke();
      p.fill(0);
      p.textSize(18);
      p.textAlign(p.CENTER);
      p.text('CHAOS', centerX / 2, 30);
      p.text('ORDER', centerX + centerX / 2, 30);
      p.textSize(14);
      p.text('↓ MIDPOINT ↓', centerX, NP / 2);

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
