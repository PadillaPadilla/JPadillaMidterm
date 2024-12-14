let stars = [];

function setup() {
  createCanvas(300, 300);

  for(let i = 0; i < 50; i++) {
    stars[i] = new Star(random(-50,0), random(-50,-300), random(0, 1), random(.3, 1.5));
  }
}

function draw() {
  background(0,10)
text('Jacob Padilla',225,290)
  for(let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }
}

class Star {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    

    this.y += this.ySpeed;
    if (this.y > 350) {
      this.y = -100
      this.x = random(-50,0)
    }
  }

  display() {
    circle(this.x, this.y, random(3,5));
    fill(random(240,255),random(240,255),random(220,235))
    noStroke()
  }
}
