let rotator = -3;
let randomIncrementor = 0;
let beanTypes = {
    coffee:{
    },
    wax: {
    },
    blue: {
    },
    chili: {
    },
    stink: {
    },
    green: {
    },
    soy: {
    },
    black: {
    },
    red: {
    },
    garden: {
    },
    cocoa: {
    }
}

const debugFunctions = {
    drawAxis: function(){
        stroke(255, 0, 0);
        line(0, 0, 0, 100, 0, 0);
        stroke(0, 255, 0);
        line(0, 0, 0, 0, 100, 0);
        stroke(0, 0, 255);
        line(0, 0, 0, 0, 0, 100);
    }
}

function preload(){
    beanTypes.coffee.texture = loadImage("Bohnanza Low-Quality Card Assets/coffee.png");
    beanTypes.wax.texture = loadImage("Bohnanza Low-Quality Card Assets/wax.png");
    beanTypes.blue.texture = loadImage("Bohnanza Low-Quality Card Assets/blue.png");
    beanTypes.chili.texture = loadImage("Bohnanza Low-Quality Card Assets/chili.png");
    beanTypes.stink.texture = loadImage("Bohnanza Low-Quality Card Assets/stink.png");
    beanTypes.green.texture = loadImage("Bohnanza Low-Quality Card Assets/green.png");
    beanTypes.soy.texture = loadImage("Bohnanza Low-Quality Card Assets/soy.png");
    beanTypes.black.texture = loadImage("Bohnanza Low-Quality Card Assets/black.png");
    beanTypes.red.texture = loadImage("Bohnanza Low-Quality Card Assets/red.png");
    //beanTypes.garden.texture = loadImage("Bohnanza Low-Quality Card Assets/garden.png");
    beanTypes.cocoa.texture = loadImage("Bohnanza Low-Quality Card Assets/cocoa.png");
}

function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    strokeWeight(2);
    background(255);
    stroke(0, 0, 0);
    rotateX(rotator * 0.1);
    //rotateY(randomIncrementor/10+1);
    ambientLight(255,255,255);
    debugFunctions.drawAxis();
    display1stPersonHand([beanTypes.coffee, beanTypes.wax, beanTypes.blue, beanTypes.chili, beanTypes.stink], -rotator*0.1, {angle:randomIncrementor, magnitude:0.1, index:0});
    randomIncrementor+=0.1;
}



function display1stPersonHand(handToDisplay, angleX, rotation){
    for(let cardDisplayIndex = 0; cardDisplayIndex < handToDisplay.length; cardDisplayIndex++){
        magnitude = (cardDisplayIndex === rotation.index) * rotation.magnitude;
        texture(handToDisplay[cardDisplayIndex].texture);
        translate(-400 + (350 * (handToDisplay.lenth^2) / (handToDisplay.length + 1)) + (700 * cardDisplayIndex / (handToDisplay.length)), 300, 200);
        
        rotateX(angleX + sin(rotation.angle) * magnitude);
        rotateY(cos(rotation.angle) * magnitude);
        
        quad(-50, -70, 0,  50, -70, 0,  50, 70, 0,  -50, 70, 0);
        
        rotateY(-cos(rotation.angle) * magnitude);
        rotateX(-angleX - sin(rotation.angle) * magnitude);
        
        translate(400 - (350 * (handToDisplay.lenth^2) / (handToDisplay.length + 1)) - (700 * cardDisplayIndex / (handToDisplay.length)), -300, -200)
    }
}