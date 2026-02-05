// Sketch 23 - JAN. 23: Draw 'blue' but make it red
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);

      // Write "BLUE" in large letters but in red color
      p.fill(255, 0, 0);
      p.noStroke();
      p.textSize(120);
      p.textAlign(p.CENTER, p.CENTER);
      p.textStyle(p.BOLD);
      p.text("BLUE", NP / 2, NP / 2);

      // Add subtitle explaining the paradox
      p.fill(100);
      p.textSize(16);
      p.textStyle(p.NORMAL);
      p.text("(but make it red)", NP / 2, NP / 2 + 100);

      // Add decorative red elements that feel "blue"
      p.noFill();
      p.stroke(255, 0, 0, 100);
      p.strokeWeight(2);

      // Wave-like patterns (typically associated with water/blue)
      for (let y = 50; y < 200; y += 20) {
        p.beginShape();
        for (let x = 0; x < NP; x += 10) {
          let waveY = y + p.sin(x * 0.05 + y * 0.1) * 10;
          p.vertex(x, waveY);
        }
        p.endShape();
      }

      // More waves at bottom
      for (let y = 400; y < 550; y += 20) {
        p.beginShape();
        for (let x = 0; x < NP; x += 10) {
          let waveY = y + p.sin(x * 0.05 + y * 0.1) * 10;
          p.vertex(x, waveY);
        }
        p.endShape();
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
