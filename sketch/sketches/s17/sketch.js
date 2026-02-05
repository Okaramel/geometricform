// Sketch 17 - JAN. 17: Produce a canvas where only the corners are filled with color
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);

      const cornerSize = 150;

      // Top-left corner: gradient red
      for (let y = 0; y < cornerSize; y++) {
        for (let x = 0; x < cornerSize; x++) {
          let dist = p.dist(0, 0, x, y);
          let alpha = p.map(dist, 0, cornerSize * 1.4, 255, 0);
          p.stroke(255, 100, 100, alpha);
          p.point(x, y);
        }
      }

      // Top-right corner: gradient blue
      for (let y = 0; y < cornerSize; y++) {
        for (let x = NP - cornerSize; x < NP; x++) {
          let dist = p.dist(NP, 0, x, y);
          let alpha = p.map(dist, 0, cornerSize * 1.4, 255, 0);
          p.stroke(100, 100, 255, alpha);
          p.point(x, y);
        }
      }

      // Bottom-left corner: gradient green
      for (let y = NP - cornerSize; y < NP; y++) {
        for (let x = 0; x < cornerSize; x++) {
          let dist = p.dist(0, NP, x, y);
          let alpha = p.map(dist, 0, cornerSize * 1.4, 255, 0);
          p.stroke(100, 255, 100, alpha);
          p.point(x, y);
        }
      }

      // Bottom-right corner: gradient yellow
      for (let y = NP - cornerSize; y < NP; y++) {
        for (let x = NP - cornerSize; x < NP; x++) {
          let dist = p.dist(NP, NP, x, y);
          let alpha = p.map(dist, 0, cornerSize * 1.4, 255, 0);
          p.stroke(255, 255, 100, alpha);
          p.point(x, y);
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
