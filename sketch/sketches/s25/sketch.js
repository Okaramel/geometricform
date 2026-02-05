// Sketch 25 - JAN. 25: Render a horizon that folds inward
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(135, 206, 235); // Sky blue

      // Draw folding horizon
      let horizonY = NP / 2;
      let foldDepth = 100;

      // Sky gradient
      for (let y = 0; y < horizonY + foldDepth; y++) {
        let skyColor = p.lerpColor(
          p.color(135, 206, 235),
          p.color(200, 230, 255),
          y / (horizonY + foldDepth)
        );
        p.stroke(skyColor);
        p.line(0, y, NP, y);
      }

      // Ground gradient (folding effect)
      for (let y = horizonY - foldDepth; y < NP; y++) {
        let groundColor = p.lerpColor(
          p.color(194, 178, 128),
          p.color(139, 115, 85),
          (y - horizonY + foldDepth) / (NP - horizonY + foldDepth)
        );
        p.stroke(groundColor);
        p.line(0, y, NP, y);
      }

      // Draw the fold (curved inward)
      p.noFill();
      p.strokeWeight(3);

      // Multiple curved lines creating fold effect
      for (let i = 0; i < 10; i++) {
        p.stroke(100 + i * 10, 80 + i * 8, 60 + i * 5, 150);
        p.beginShape();
        for (let x = 0; x <= NP; x += 5) {
          let offset = i * 10;
          let curve = p.sin(p.map(x, 0, NP, 0, p.PI)) * foldDepth;
          p.vertex(x, horizonY - curve + offset);
        }
        p.endShape();
      }

      // Add shading to emphasize the fold
      p.noStroke();
      for (let x = 0; x < NP; x++) {
        for (let y = horizonY - foldDepth; y < horizonY + foldDepth; y++) {
          let curve = p.sin(p.map(x, 0, NP, 0, p.PI)) * foldDepth;
          let targetY = horizonY - curve;
          if (p.abs(y - targetY) < 20) {
            let alpha = p.map(p.abs(y - targetY), 0, 20, 60, 0);
            p.stroke(0, 0, 0, alpha);
            p.point(x, y);
          }
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
