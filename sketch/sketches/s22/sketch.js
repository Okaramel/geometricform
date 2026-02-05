// Sketch 22 - JAN. 22: Render yesterday's weather as a photorealistic object
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(200, 220, 240);

      // Yesterday's weather: Cloudy with chance of rain (artistic interpretation)
      // Render as a glass sphere containing weather

      let centerX = NP / 2;
      let centerY = NP / 2;
      let sphereRadius = 180;

      // Draw sphere with gradient (glass effect)
      for (let r = sphereRadius; r > 0; r -= 2) {
        let alpha = p.map(r, 0, sphereRadius, 200, 50);
        let brightness = p.map(r, 0, sphereRadius, 255, 180);
        p.noStroke();
        p.fill(brightness, brightness, brightness + 20, alpha);
        p.circle(centerX, centerY, r * 2);
      }

      // Clouds inside the sphere
      p.fill(255, 255, 255, 180);
      for (let i = 0; i < 5; i++) {
        let cloudX = centerX + p.random(-80, 80);
        let cloudY = centerY + p.random(-60, -20);
        p.circle(cloudX, cloudY, p.random(30, 50));
        p.circle(cloudX + 20, cloudY, p.random(25, 40));
        p.circle(cloudX - 15, cloudY + 5, p.random(20, 35));
      }

      // Rain drops inside sphere
      p.stroke(100, 150, 200, 180);
      p.strokeWeight(2);
      for (let i = 0; i < 40; i++) {
        let rainX = centerX + p.random(-sphereRadius + 50, sphereRadius - 50);
        let rainY = centerY + p.random(-sphereRadius + 50, sphereRadius - 30);
        p.line(rainX, rainY, rainX - 2, rainY + 15);
      }

      // Highlight (photorealistic glass effect)
      p.noStroke();
      p.fill(255, 255, 255, 150);
      p.ellipse(centerX - 60, centerY - 60, 40, 60);

      // Shadow
      p.fill(0, 0, 0, 30);
      p.ellipse(centerX + 20, NP - 120, sphereRadius * 1.5, 40);

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
