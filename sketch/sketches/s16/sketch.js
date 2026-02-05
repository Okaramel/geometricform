// Sketch 16 - JAN. 16: Produce an image made entirely of horizontal lines that are each exactly one pixel apart, except one line
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);

      // Pick a random line to be the exception
      const exceptionLine = p.floor(p.random(NP));

      p.strokeWeight(1);

      for (let y = 0; y < NP; y++) {
        if (y === exceptionLine) {
          // The exception: this line is different (2 pixels apart from next)
          p.stroke(255, 0, 0);
          p.line(0, y, NP, y);
          y++; // Skip one pixel
        } else {
          // Normal lines: each exactly one pixel apart
          p.stroke(0);
          p.line(0, y, NP, y);
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
