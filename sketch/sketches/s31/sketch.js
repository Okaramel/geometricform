// Sketch 31 - JAN. 31: Draw shadows without objects
(function(){
  window.createSketch = function(p){
    const NP = 600;

    p.setup = function(){
      p.createCanvas(NP, NP);
      p.background(240, 240, 250);

      // Draw various shadows without their casting objects

      // Shadow 1: Circle shadow (no circle)
      p.noStroke();
      for (let r = 80; r > 0; r -= 2) {
        let alpha = p.map(r, 0, 80, 0, 100);
        p.fill(0, 0, 0, alpha);
        p.ellipse(150, 150, r * 2, r * 0.5);
      }

      // Shadow 2: Rectangle shadow (no rectangle)
      p.fill(0, 0, 0, 40);
      p.quad(
        350, 200,
        480, 210,
        470, 260,
        340, 250
      );

      // Shadow 3: Triangle shadow (no triangle)
      p.fill(0, 0, 0, 50);
      p.triangle(
        200, 400,
        150, 480,
        250, 480
      );

      // Shadow 4: Human-like shadow (no human)
      p.fill(0, 0, 0, 35);
      p.ellipse(450, 450, 60, 20); // Head shadow
      p.quad(
        420, 460,
        480, 460,
        490, 550,
        410, 550
      ); // Body shadow

      // Shadow 5: Tree shadow (no tree)
      p.fill(0, 0, 0, 30);
      p.beginShape();
      p.vertex(100, 550);
      p.vertex(105, 400);
      p.vertex(80, 380);
      p.vertex(90, 380);
      p.vertex(70, 360);
      p.vertex(85, 360);
      p.vertex(75, 340);
      p.vertex(95, 350);
      p.vertex(110, 330);
      p.vertex(115, 350);
      p.vertex(135, 340);
      p.vertex(125, 360);
      p.vertex(140, 360);
      p.vertex(120, 380);
      p.vertex(130, 380);
      p.vertex(115, 400);
      p.vertex(120, 550);
      p.endShape(p.CLOSE);

      // Shadow 6: Bird shadow (no bird)
      p.fill(0, 0, 0, 25);
      p.push();
      p.translate(350, 100);
      p.scale(1.5, 0.3);
      p.arc(0, 0, 60, 60, p.PI, p.TWO_PI);
      p.arc(-30, 0, 40, 40, p.PI, p.TWO_PI);
      p.arc(30, 0, 40, 40, p.PI, p.TWO_PI);
      p.pop();

      p.noLoop();
    };

    p.draw = function(){};
  };
})();
