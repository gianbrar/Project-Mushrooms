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
    beanTypes.coffee.texture = loadImage("/BohnanzaLow-QualityCardAssets/coffee.png");
    beanTypes.wax.texture = loadImage("/BohnanzaLow-QualityCardAssets/wax.png");
    beanTypes.blue.texture = loadImage("/BohnanzaLow-QualityCardAssets/blue.png");
    beanTypes.chili.texture = loadImage("/BohnanzaLow-QualityCardAssets/chili.png");
    beanTypes.stink.texture = loadImage("/BohnanzaLow-QualityCardAssets/stink.png");
    beanTypes.green.texture = loadImage("/BohnanzaLow-QualityCardAssets/green.png");
    beanTypes.soy.texture = loadImage("/BohnanzaLow-QualityCardAssets/soy.png");
    beanTypes.black.texture = loadImage("/BohnanzaLow-QualityCardAssets/black.png");
    beanTypes.red.texture = loadImage("/BohnanzaLow-QualityCardAssets/red.png");
    //beanTypes.garden.texture = loadImage("/Bohnanza Low-Quality Card Assets/garden.png");
    beanTypes.cocoa.texture = loadImage("/BohnanzaLow-QualityCardAssets/cocoa.png");
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
    display1stPersonHand([beanTypes.coffee, beanTypes.wax, beanTypes.blue, beanTypes.chili, beanTypes.stink], 1.7, -rotator*0.1, {angle:randomIncrementor, magnitude:0.1, index:0});
    randomIncrementor+=0.1;
}



function display1stPersonHand(handToDisplay, cardScale, angleX, rotation){
    for(let cardDisplayIndex = 0; cardDisplayIndex < handToDisplay.length; cardDisplayIndex++){
        magnitude = (cardDisplayIndex === rotation.index) * rotation.magnitude;
        texture(handToDisplay[cardDisplayIndex].texture);
        translate(( (700 * cardDisplayIndex / handToDisplay.length) - ((350 / handToDisplay.length) * (handToDisplay.length - 1)) ) * cardScale, 300, 200);
        
        rotateX(angleX + sin(rotation.angle) * magnitude);
        rotateY(cos(rotation.angle) * magnitude);
        
        quad(-50 * cardScale, -70 * cardScale, 0,  50 * cardScale, -70 * cardScale, 0,  50 * cardScale, 70 * cardScale, 0,  -50 * cardScale, 70 * cardScale, 0);
        
        rotateY(-cos(rotation.angle) * magnitude);
        rotateX(-angleX - sin(rotation.angle) * magnitude);
        
        translate(( (700 * cardDisplayIndex / handToDisplay.length) - ((350 / handToDisplay.length) * (handToDisplay.length - 1)) ) * -cardScale, -300, -200)
    }
}