// Sketch 14 - JAN. 14: Create a noise pattern that becomes progressively smoother the more you zoom in
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let zoom = 1;
    let zoomSpeed = 0.01;

    p.setup = function(){
      p.createCanvas(NP, NP);
    };

    p.draw = function(){
      p.loadPixels();

      // Inverse relationship: as zoom increases, noise scale decreases (smoother)
      let noiseScale = 0.02 / zoom;

      for (let y = 0; y < NP; y++) {
        for (let x = 0; x < NP; x++) {
          const index = (y * NP + x) * 4;

          // Apply noise with decreasing frequency (smoother)
          const noiseVal = p.noise(x * noiseScale, y * noiseScale, p.frameCount * 0.01);
          const brightness = p.map(noiseVal, 0, 1, 0, 255);

          p.pixels[index] = brightness;
          p.pixels[index + 1] = brightness * 0.8;
          p.pixels[index + 2] = brightness * 1.2;
          p.pixels[index + 3] = 255;
        }
      }

      p.updatePixels();

      // Gradually zoom in
      zoom += zoomSpeed;

      // Display zoom level
      p.fill(255);
      p.noStroke();
      p.rect(10, 10, 150, 30);
      p.fill(0);
      p.textSize(14);
      p.text(`Zoom: ${zoom.toFixed(2)}x`, 20, 30);
    };
  };
})();
