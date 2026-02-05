// Sketch 06 - JAN. 6: Animate a bouncing dot on an infinite canvas
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let x, y, vx, vy;
    let offsetX = 0, offsetY = 0;

    p.setup = function(){
      p.createCanvas(NP, NP);
      x = NP / 2;
      y = NP / 2;
      vx = 3;
      vy = 2;
    };

    p.draw = function(){
      p.background(20);

      // Update position
      x += vx;
      y += vy;

      // "Infinite canvas" - when dot goes off screen, adjust offset
      if (x > NP) {
        offsetX += NP;
        x = 0;
      } else if (x < 0) {
        offsetX -= NP;
        x = NP;
      }

      if (y > NP) {
        offsetY += NP;
        y = 0;
      } else if (y < 0) {
        offsetY -= NP;
        y = NP;
      }

      // Draw grid to show "infinite" space
      p.stroke(50);
      for (let i = 0; i < NP; i += 50) {
        p.line(i, 0, i, NP);
        p.line(0, i, NP, i);
      }

      // Draw the bouncing dot
      p.fill(100, 200, 255);
      p.noStroke();
      p.circle(x, y, 20);

      // Show coordinates to emphasize infinite canvas
      p.fill(255);
      p.textSize(14);
      p.text(`(${Math.floor(offsetX + x)}, ${Math.floor(offsetY + y)})`, 10, 20);
    };
  };
})();
