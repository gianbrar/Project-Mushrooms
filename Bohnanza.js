function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight, WEBGL);
}

let rotator = 0;

function draw() {
    background(255);
    stroke(0, 0, 0);
    rotateX(rotator * 0.1);
    rotateY(rotator * 0.02);
    box();
    rotator++;
}