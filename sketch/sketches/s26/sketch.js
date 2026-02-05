// Sketch 26 - JAN. 26: Generate a texture where each pixel copies the value of a random neighbor every frame
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.loadPixels();

      // Initialize with random colors
      for (let i = 0; i < p.pixels.length; i += 4) {
        p.pixels[i] = p.random(255);
        p.pixels[i + 1] = p.random(255);
        p.pixels[i + 2] = p.random(255);
        p.pixels[i + 3] = 255;
      }

      p.updatePixels();
    };

    p.draw = function(){
      p.loadPixels();

      let newPixels = new Uint8ClampedArray(p.pixels);

      // Each pixel copies from a random neighbor
      for (let y = 1; y < NP - 1; y++) {
        for (let x = 1; x < NP - 1; x++) {
          let index = (y * NP + x) * 4;

          // Pick a random neighbor
          let offsetX = p.floor(p.random(-1, 2));
          let offsetY = p.floor(p.random(-1, 2));
          let neighborX = x + offsetX;
          let neighborY = y + offsetY;

          // Make sure neighbor is valid
          neighborX = p.constrain(neighborX, 0, NP - 1);
          neighborY = p.constrain(neighborY, 0, NP - 1);

          let neighborIndex = (neighborY * NP + neighborX) * 4;

          // Copy neighbor's color
          newPixels[index] = p.pixels[neighborIndex];
          newPixels[index + 1] = p.pixels[neighborIndex + 1];
          newPixels[index + 2] = p.pixels[neighborIndex + 2];
          newPixels[index + 3] = 255;
        }
      }

      p.pixels.set(newPixels);
      p.updatePixels();

      // Slow down the frame rate to see the effect
      p.frameRate(10);
    };
  };
})();
