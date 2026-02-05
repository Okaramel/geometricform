// Sketch 15 - JAN. 15: Fill a canvas with invisible shapes
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let shapes = [];

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);

      // Create invisible shapes (stroke only, no fill, but stroke is also invisible)
      for (let i = 0; i < 100; i++) {
        shapes.push({
          x: p.random(NP),
          y: p.random(NP),
          size: p.random(20, 100),
          type: p.floor(p.random(3))
        });
      }

      p.noLoop();
    };

    p.draw = function(){
      p.background(255);

      // Draw invisible shapes (they're there, just invisible!)
      p.noFill();
      p.stroke(255, 0); // Completely transparent stroke

      for (let shape of shapes) {
        if (shape.type === 0) {
          p.circle(shape.x, shape.y, shape.size);
        } else if (shape.type === 1) {
          p.rect(shape.x, shape.y, shape.size, shape.size);
        } else {
          p.triangle(
            shape.x, shape.y - shape.size / 2,
            shape.x - shape.size / 2, shape.y + shape.size / 2,
            shape.x + shape.size / 2, shape.y + shape.size / 2
          );
        }
      }

      // Hint that shapes are there (subtle shadows on hover)
      if (p.mouseX > 0 && p.mouseX < NP && p.mouseY > 0 && p.mouseY < NP) {
        for (let shape of shapes) {
          let d = p.dist(p.mouseX, p.mouseY, shape.x, shape.y);
          if (d < shape.size) {
            p.fill(0, 0, 0, 5);
            p.noStroke();
            if (shape.type === 0) {
              p.circle(shape.x, shape.y, shape.size);
            } else if (shape.type === 1) {
              p.rect(shape.x, shape.y, shape.size, shape.size);
            } else {
              p.triangle(
                shape.x, shape.y - shape.size / 2,
                shape.x - shape.size / 2, shape.y + shape.size / 2,
                shape.x + shape.size / 2, shape.y + shape.size / 2
              );
            }
          }
        }
      }
    };

    p.mouseMoved = function(){
      p.redraw();
    };
  };
})();
