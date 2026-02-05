// Sketch 24 - JAN. 24: Generate a canvas filled with straight lines where exactly one line is wavy
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);

      let lineCount = 40;
      let wavyLineIndex = p.floor(p.random(lineCount));

      p.stroke(0);
      p.strokeWeight(2);
      p.noFill();

      for (let i = 0; i < lineCount; i++) {
        let y = p.map(i, 0, lineCount - 1, 50, NP - 50);

        if (i === wavyLineIndex) {
          // The one wavy line
          p.stroke(255, 0, 100);
          p.strokeWeight(3);
          p.beginShape();
          for (let x = 0; x < NP; x += 5) {
            let waveY = y + p.sin(x * 0.05) * 15;
            p.vertex(x, waveY);
          }
          p.endShape();
          p.stroke(0);
          p.strokeWeight(2);
        } else {
          // Straight lines
          p.line(0, y, NP, y);
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
