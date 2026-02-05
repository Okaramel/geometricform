// Sketch 28 - JAN. 28: Generate a texture that behaves like silk when you stare at it and like sand when you blink
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let mode = 'silk'; // 'silk' or 'sand'
    let lastBlink = 0;
    let blinkThreshold = 150; // milliseconds between frames to detect blink

    p.setup = function(){
      p.createCanvas(NP, NP);
    };

    p.draw = function(){
      // Detect "blink" (significant time gap between frames)
      let currentTime = p.millis();
      if (currentTime - lastBlink > blinkThreshold) {
        mode = 'sand';
        setTimeout(() => { mode = 'silk'; }, 1000);
      }
      lastBlink = currentTime;

      if (mode === 'silk') {
        // Silk: smooth, flowing, shimmering texture
        p.loadPixels();
        for (let y = 0; y < NP; y++) {
          for (let x = 0; x < NP; x++) {
            let index = (y * NP + x) * 4;

            // Smooth flowing noise
            let n = p.noise(x * 0.01, y * 0.01, p.frameCount * 0.01);
            let brightness = p.map(n, 0, 1, 180, 255);

            // Silky shimmer
            let shimmer = p.sin(x * 0.1 + p.frameCount * 0.1) * 20;

            p.pixels[index] = brightness + shimmer;
            p.pixels[index + 1] = brightness + shimmer * 0.9;
            p.pixels[index + 2] = brightness + shimmer * 1.1;
            p.pixels[index + 3] = 255;
          }
        }
        p.updatePixels();

        p.fill(255);
        p.noStroke();
        p.rect(10, 10, 100, 25);
        p.fill(0);
        p.textSize(14);
        p.text("Mode: Silk", 15, 28);
      } else {
        // Sand: grainy, rough, random texture
        p.loadPixels();
        for (let y = 0; y < NP; y++) {
          for (let x = 0; x < NP; x++) {
            let index = (y * NP + x) * 4;

            // Grainy random texture
            let grain = p.random(150, 220);
            let sandColor = p.color(grain, grain * 0.9, grain * 0.7);

            p.pixels[index] = p.red(sandColor);
            p.pixels[index + 1] = p.green(sandColor);
            p.pixels[index + 2] = p.blue(sandColor);
            p.pixels[index + 3] = 255;
          }
        }
        p.updatePixels();

        p.fill(255);
        p.noStroke();
        p.rect(10, 10, 100, 25);
        p.fill(0);
        p.textSize(14);
        p.text("Mode: Sand", 15, 28);
      }
    };

    // Click to toggle mode manually
    p.mousePressed = function(){
      mode = mode === 'silk' ? 'sand' : 'silk';
    };
  };
})();
