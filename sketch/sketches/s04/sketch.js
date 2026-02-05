// Sketch 04 - JAN. 4: Loop a line that never ends
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let angle = 0;
    let points = [];
    const maxPoints = 800;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(20);
      p.stroke(100, 200, 255);
      p.strokeWeight(2);
      p.noFill();
    };

    p.draw = function(){
      p.translate(NP/2, NP/2);

      // Create a continuously looping line using Lissajous curves
      const x = Math.sin(angle * 3.1) * 200;
      const y = Math.cos(angle * 2.3) * 200;

      points.push({x, y});

      // Keep only last maxPoints to create infinite loop effect
      if (points.length > maxPoints) {
        points.shift();
        p.background(20, 20, 25, 10); // Slight fade for trail effect
      }

      // Draw the continuous line
      p.beginShape();
      for (let pt of points) {
        p.vertex(pt.x, pt.y);
      }
      p.endShape();

      angle += 0.01;
    };
  };
})();
