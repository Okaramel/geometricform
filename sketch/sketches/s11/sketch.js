// Sketch 11 - JAN. 11: Render texture made entirely of negative pixels
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(255);
      p.loadPixels();

      // Create a texture pattern first
      for (let y = 0; y < NP; y++) {
        for (let x = 0; x < NP; x++) {
          const index = (y * NP + x) * 4;
          const noise = p.noise(x * 0.02, y * 0.02) * 255;

          p.pixels[index] = noise;
          p.pixels[index + 1] = noise;
          p.pixels[index + 2] = noise;
          p.pixels[index + 3] = 255;
        }
      }

      // Invert all pixels to create "negative" effect
      for (let i = 0; i < p.pixels.length; i += 4) {
        p.pixels[i] = 255 - p.pixels[i];         // Invert R
        p.pixels[i + 1] = 255 - p.pixels[i + 1]; // Invert G
        p.pixels[i + 2] = 255 - p.pixels[i + 2]; // Invert B
      }

      p.updatePixels();

      // Add label
      p.fill(255);
      p.noStroke();
      p.textSize(14);
      p.textAlign(p.CENTER);
      p.text('Negative Pixels', NP / 2, NP - 20);

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
