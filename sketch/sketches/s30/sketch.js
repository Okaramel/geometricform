// Sketch 30 - JAN. 30: Create a tileable pattern using only triangles that are not allowed to touch each other
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(240);

      let triangleSize = 40;
      let spacing = 60; // Space between triangles to ensure they don't touch

      p.strokeWeight(2);

      for (let y = spacing / 2; y < NP; y += spacing) {
        for (let x = spacing / 2; x < NP; x += spacing) {
          // Random rotation for variety
          let rotation = p.random([0, p.PI / 6, p.PI / 3, p.PI / 2]);

          p.push();
          p.translate(x, y);
          p.rotate(rotation);

          // Random color
          p.fill(p.random(100, 255), p.random(100, 255), p.random(100, 255), 200);
          p.stroke(0);

          // Draw triangle
          p.triangle(
            0, -triangleSize / 2,
            -triangleSize / 2, triangleSize / 2,
            triangleSize / 2, triangleSize / 2
          );

          p.pop();
        }
      }

      // Add offset row for tiling effect
      for (let y = spacing; y < NP; y += spacing) {
        for (let x = 0; x < NP; x += spacing) {
          let rotation = p.random([0, p.PI / 6, p.PI / 3, p.PI / 2]);

          p.push();
          p.translate(x, y);
          p.rotate(rotation);

          p.fill(p.random(100, 255), p.random(100, 255), p.random(100, 255), 200);
          p.stroke(0);

          p.triangle(
            0, -triangleSize / 2,
            -triangleSize / 2, triangleSize / 2,
            triangleSize / 2, triangleSize / 2
          );

          p.pop();
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
