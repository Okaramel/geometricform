// Sketch 19 - JAN. 19: Draw a map consisting only of roads that lead nowhere but are extremely useful
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(240, 235, 220);

      // Generate roads that don't connect but create interesting patterns
      p.strokeWeight(3);
      p.stroke(100, 100, 100);
      p.noFill();

      // Circular roads leading nowhere
      for (let i = 0; i < 15; i++) {
        let x = p.random(100, NP - 100);
        let y = p.random(100, NP - 100);
        let r = p.random(30, 80);
        let start = p.random(p.TWO_PI);
        let end = start + p.random(p.PI / 2, p.PI);
        p.arc(x, y, r, r, start, end);
      }

      // Straight roads that stop suddenly
      for (let i = 0; i < 20; i++) {
        let x1 = p.random(NP);
        let y1 = p.random(NP);
        let angle = p.random(p.TWO_PI);
        let len = p.random(50, 150);
        let x2 = x1 + p.cos(angle) * len;
        let y2 = y1 + p.sin(angle) * len;
        p.line(x1, y1, x2, y2);
      }

      // Spiral roads
      for (let i = 0; i < 5; i++) {
        let cx = p.random(100, NP - 100);
        let cy = p.random(100, NP - 100);
        p.beginShape();
        for (let a = 0; a < p.TWO_PI * 2; a += 0.1) {
          let r = a * 5;
          let x = cx + p.cos(a) * r;
          let y = cy + p.sin(a) * r;
          p.vertex(x, y);
        }
        p.endShape();
      }

      // Add "useful" labels
      p.fill(200, 50, 50);
      p.noStroke();
      p.textSize(10);
      p.text("Scenic Route", 50, 50);
      p.text("Thinking Path", 400, 100);
      p.text("Meditation Loop", 100, 500);
      p.text("Contemplation Ave", 350, 550);

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
