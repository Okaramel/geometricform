// Sketch 13 - JAN. 13: Create a fractal forest where each tree is actually a single line
(function(){
  window.createSketch = function(p){
    const NP = 600;

    function drawTree(x, y, angle, depth, len) {
      if (depth === 0) return;

      const x2 = x + p.cos(angle) * len;
      const y2 = y + p.sin(angle) * len;

      p.stroke(80, 50 + depth * 15, 30, 200);
      p.strokeWeight(depth * 0.5);
      p.line(x, y, x2, y2);

      // Recursively draw branches as part of the single continuous line concept
      drawTree(x2, y2, angle - p.PI / 6, depth - 1, len * 0.67);
      drawTree(x2, y2, angle + p.PI / 6, depth - 1, len * 0.67);
      drawTree(x2, y2, angle, depth - 1, len * 0.8);
    }

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(240, 235, 220);

      // Plant a forest of fractal trees
      for (let i = 0; i < 8; i++) {
        let x = p.map(i, 0, 7, 100, 500);
        let treeHeight = p.random(40, 70);
        let depth = p.floor(p.random(6, 9));

        p.push();
        drawTree(x, NP - 50, -p.PI / 2, depth, treeHeight);
        p.pop();
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
