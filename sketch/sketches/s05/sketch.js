// Sketch 05 - JAN. 5: Illustrate 'less is more' using exactly 2,473 distinct objects
(function(){
  window.createSketch = function(p){
    const NP = 600;
    const OBJECTS_COUNT = 2473;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(250);
      p.noStroke();

      // Draw exactly 2,473 tiny dots to illustrate "less is more"
      // Ironically using many objects to represent minimalism
      p.fill(0, 0, 0, 30);

      // Create a simple, elegant composition with 2,473 tiny dots
      // forming a minimal circle in the center
      const centerX = NP / 2;
      const centerY = NP / 2;

      for (let i = 0; i < OBJECTS_COUNT; i++) {
        const angle = (i / OBJECTS_COUNT) * Math.PI * 2 * 8;
        const radius = 80 + (i % 50);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        p.circle(x, y, 1);
      }

      // Add text label
      p.fill(0);
      p.textSize(12);
      p.textAlign(p.CENTER);
      p.text('2,473 objects', NP / 2, NP - 30);

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
