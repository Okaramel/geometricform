// Sketch 02 - JAN. 2: Generate color without repeating it
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.colorMode(p.HSB, 360, 100, 100);
      p.noStroke();

      // Generate all unique colors using HSB color space
      // We'll use golden ratio to spread colors across hue spectrum
      const goldenRatio = 0.618033988749895;

      for (let y = 0; y < NP; y++) {
        for (let x = 0; x < NP; x++) {
          const pixelNum = y * NP + x;

          // Use golden ratio to generate unique hues
          const hue = (pixelNum * goldenRatio * 360) % 360;

          // Vary saturation and brightness to ensure uniqueness
          const sat = 30 + (pixelNum % 70);
          const bright = 40 + ((pixelNum * 7) % 60);

          p.fill(hue, sat, bright);
          p.rect(x, y, 1, 1);
        }
      }

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
