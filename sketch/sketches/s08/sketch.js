// Sketch 08 - JAN. 8: Render an image where every object casts a shadow in the wrong direction
(function(){
  window.createSketch = function(p){
    const NP = 600;
    const objects = [];

    p.setup = function(){
      p.createCanvas(NP, NP);

      // Create multiple objects
      for (let i = 0; i < 8; i++) {
        objects.push({
          x: p.random(100, NP - 100),
          y: p.random(100, NP - 100),
          size: p.random(40, 80),
          shadowAngle: p.random(0, Math.PI * 2) // Random shadow direction
        });
      }

      p.noLoop();
    };

    p.draw = function(){
      p.background(200, 220, 240);

      // Light source indicator (top-left)
      p.fill(255, 255, 100);
      p.noStroke();
      p.circle(50, 50, 30);

      // Draw objects and their "wrong" shadows
      for (let obj of objects) {
        // Shadow should go bottom-right (light from top-left)
        // But we cast it in a random wrong direction
        const shadowDist = 30;
        const shadowX = obj.x + Math.cos(obj.shadowAngle) * shadowDist;
        const shadowY = obj.y + Math.sin(obj.shadowAngle) * shadowDist;

        // Draw shadow
        p.fill(0, 0, 0, 50);
        p.noStroke();
        p.ellipse(shadowX, shadowY, obj.size, obj.size * 0.3);

        // Draw object
        p.fill(255, 100, 100);
        p.stroke(200, 80, 80);
        p.strokeWeight(2);
        p.circle(obj.x, obj.y, obj.size);
      }
    };
  };
})();
