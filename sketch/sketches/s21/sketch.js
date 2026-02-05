// Sketch 21 - JAN. 21: Produce an image where every color is slightly "off" from the previous row
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.noStroke();

      // Start with a base color
      let r = 200;
      let g = 100;
      let b = 150;

      // Each row is slightly "off" from the previous
      for (let y = 0; y < NP; y++) {
        p.fill(r, g, b);
        p.rect(0, y, NP, 1);

        // Shift colors slightly for next row
        r += p.random(-3, 3);
        g += p.random(-3, 3);
        b += p.random(-3, 3);

        // Keep colors in valid range with wrapping
        r = (r + 256) % 256;
        g = (g + 256) % 256;
        b = (b + 256) % 256;
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
