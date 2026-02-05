// Sketch 20 - JAN. 20: Tile patterns that repel each other
(function(){
  window.createSketch = function(p){
    const NP = 600;
    let tiles = [];

    class Tile {
      constructor(x, y, size, pattern) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.pattern = pattern;
        this.vx = 0;
        this.vy = 0;
        this.color = p.color(p.random(100, 255), p.random(100, 255), p.random(100, 255));
      }

      update() {
        // Repel from other tiles
        for (let other of tiles) {
          if (other === this) continue;

          let dx = this.x - other.x;
          let dy = this.y - other.y;
          let dist = p.sqrt(dx * dx + dy * dy);

          if (dist < this.size * 2 && dist > 0) {
            let force = (this.size * 2 - dist) / (this.size * 2);
            this.vx += (dx / dist) * force * 2;
            this.vy += (dy / dist) * force * 2;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.9;
        this.vy *= 0.9;

        // Bounce off edges
        if (this.x < this.size / 2 || this.x > NP - this.size / 2) this.vx *= -1;
        if (this.y < this.size / 2 || this.y > NP - this.size / 2) this.vy *= -1;

        this.x = p.constrain(this.x, this.size / 2, NP - this.size / 2);
        this.y = p.constrain(this.y, this.size / 2, NP - this.size / 2);
      }

      display() {
        p.push();
        p.translate(this.x, this.y);
        p.fill(this.color);
        p.stroke(0);
        p.strokeWeight(2);

        if (this.pattern === 0) {
          // Square pattern
          p.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.pattern === 1) {
          // Circle pattern
          p.circle(0, 0, this.size);
        } else {
          // Triangle pattern
          p.triangle(0, -this.size / 2, -this.size / 2, this.size / 2, this.size / 2, this.size / 2);
        }

        p.pop();
      }
    }

    p.setup = function(){
      p.createCanvas(NP, NP);

      // Create tiles with different patterns
      for (let i = 0; i < 12; i++) {
        tiles.push(new Tile(
          p.random(NP),
          p.random(NP),
          p.random(40, 80),
          p.floor(p.random(3))
        ));
      }
    };

    p.draw = function(){
      p.background(250);

      for (let tile of tiles) {
        tile.update();
        tile.display();
      }
    };
  };
})();
