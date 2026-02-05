// Sketch 18 - JAN. 18: Make pixels shy from each other
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.color = p.color(p.random(255), p.random(255), p.random(255));
      }

      update() {
        // Shy away from other particles
        for (let other of particles) {
          if (other === this) continue;

          let dx = this.x - other.x;
          let dy = this.y - other.y;
          let dist = p.sqrt(dx * dx + dy * dy);

          if (dist < 50 && dist > 0) {
            // Repel from each other
            let force = (50 - dist) / 50;
            this.vx += (dx / dist) * force * 0.5;
            this.vy += (dy / dist) * force * 0.5;
          }
        }

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Damping
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Wrap around edges
        if (this.x < 0) this.x = NP;
        if (this.x > NP) this.x = 0;
        if (this.y < 0) this.y = NP;
        if (this.y > NP) this.y = 0;
      }

      display() {
        p.fill(this.color);
        p.noStroke();
        p.circle(this.x, this.y, 8);
      }
    }

    p.setup = function(){
      p.createCanvas(NP, NP);

      // Create shy particles
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(p.random(NP), p.random(NP)));
      }
    };

    p.draw = function(){
      p.background(255, 255, 255, 30);

      for (let particle of particles) {
        particle.update();
        particle.display();
      }
    };
  };
})();
