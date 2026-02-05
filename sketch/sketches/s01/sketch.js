// Sketch 01 - JAN. 1: Generate an image where every pixel is a slightly different shade of gray except for one neon pink pixel
(function(){
  window.createSketch = function(p){
    const NP = 600;
    p.setup = function(){
      p.createCanvas(NP, NP);
      p.loadPixels();

      // Generate unique gray shades for each pixel
      const totalPixels = NP * NP;
      const pinkX = Math.floor(p.random(NP));
      const pinkY = Math.floor(p.random(NP));

      for (let y = 0; y < NP; y++) {
        for (let x = 0; x < NP; x++) {
          const index = (y * NP + x) * 4;

          if (x === pinkX && y === pinkY) {
            // The one neon pink pixel
            p.pixels[index] = 255;     // R
            p.pixels[index + 1] = 20;  // G
            p.pixels[index + 2] = 147; // B
            p.pixels[index + 3] = 255; // A
          } else {
            // Slightly different shade of gray for each pixel
            const grayValue = p.map((y * NP + x), 0, totalPixels - 1, 0, 255);
            const variation = p.noise(x * 0.01, y * 0.01) * 30;
            const finalGray = p.constrain(grayValue + variation, 0, 255);

            p.pixels[index] = finalGray;
            p.pixels[index + 1] = finalGray;
            p.pixels[index + 2] = finalGray;
            p.pixels[index + 3] = 255;
          }
        }
      }

      p.updatePixels();
      p.noLoop();
    };
    p.draw = function(){};
  };
})();
