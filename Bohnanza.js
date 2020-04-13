let rotator = -3;
let beanTypes = {
    coffee:{
        texture: 0
    },
    wax: {
        texture: 0
    },
    blue: {
        texture: 0
    },
    chili: {
        texture: 0
    },
    stink: {
        texture: 0
    },
    green: {
        texture: 0
    },
    soy: {
        texture: 0
    },
    black: {
        texture: 0
    },
    red: {
        texture: 0
    },
    garden: {
        texture: 0
    },
    cocoa: {
        texture: 0
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
    debugFunctions.drawAxis();
    display1stPersonHand([beanTypes.coffee]);
}



function display1stPersonHand(handToDisplay){
    for(let cardDisplayIndex = 0; cardDisplayIndex < handToDisplay.length; cardDisplayIndex++){
        texture(handToDisplay[cardDisplayIndex].texture);
        quad(200, 200, 200, 400, 200, 200, 400, 400, 200, 200, 400, 200);
    }
}