// Sketch 03 - JAN. 3: Create a perfect circle using only left-handed pixels
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(20);
      p.loadPixels();

      const centerX = NP / 2;
      const centerY = NP / 2;
      const radius = NP * 0.35;

      // "Left-handed pixels" - only pixels where x < centerX
      for (let y = 0; y < NP; y++) {
        for (let x = 0; x < NP; x++) {
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Check if pixel is on the circle perimeter
          const onCircle = Math.abs(distance - radius) < 2;

          // Only draw if it's a "left-handed pixel" (x < centerX)
          if (onCircle && x <= centerX) {
            const index = (y * NP + x) * 4;
            p.pixels[index] = 100;     // R
            p.pixels[index + 1] = 200; // G
            p.pixels[index + 2] = 255; // B
            p.pixels[index + 3] = 255; // A
          }
        }
      }

      p.updatePixels();
      p.noLoop();
    };

    p.draw = function(){};
  };
})();
