// MORELL Mathilde - mathilde.morell@edu.devinci.fr
let NP = 1000;
let PI = Math.PI;

function setup() {
  createCanvas(NP, NP);
  background(20, 20, 22);
  
  let CX = NP / 2;
  let CY = NP / 2;
  let R = NP * 0.42;
  let AD = PI / 2;
  let time = 0;

  translate(CX, CY);

  for (let layer = 0; layer < 8; layer++) {
    let K = 5 + layer * 2;
    let H = floor(K / 2.5);
    let radius = R * (1 - layer * 0.11);
    let rotation = time + layer * 0.4;
    
    let hue = (160 + layer * 25) % 360;
    let alpha = 220 - layer * 20;
    
    stroke(hue, 180, 200, alpha);
    strokeWeight(2.5 - layer * 0.2);
    noFill();
    
    beginShape();
    for (let i = 0; i <= K; i++) {
      let angle = (2 * i * H * PI) / K + AD + rotation;
      let X = radius * cos(angle);
      let Y = radius * sin(angle);
      vertex(X, Y);
    }
    endShape(CLOSE);
    
    if (layer > 0) {
      let prevK = 5 + (layer - 1) * 2;
      let prevH = floor(prevK / 2.5);
      let prevRadius = R * (1 - (layer - 1) * 0.11);
      let prevRotation = time + (layer - 1) * 0.4;
      
      stroke(hue, 100, 150, 60);
      strokeWeight(0.5);
      
      for (let i = 0; i < K; i += 2) {
        let angle1 = (2 * i * H * PI) / K + AD + rotation;
        let X1 = radius * cos(angle1);
        let Y1 = radius * sin(angle1);
        
        let angle2 = (2 * i * prevH * PI) / prevK + AD + prevRotation;
        let X2 = prevRadius * cos(angle2);
        let Y2 = prevRadius * sin(angle2);
        
        line(X1, Y1, X2, Y2);
      }
    }
  }
  
  noLoop();
}

function draw() {
}