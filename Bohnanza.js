let rotator = -3;
let randomIncrementor = 0;

let everythingScale;

let yscale;

let tableTexture;

let fringeTexture;

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
        line(0, 10000, 0, 0, -100, 0);
        stroke(0, 0, 255);
        line(0, 0, 0, 0, 0, 100);
    }
}

function preload(){
    tableTexture = loadImage("/Assets/RoundTable.png");
    
    fringeTexture = loadImage("/Assets/FringeGrain.png");
    
    beanTypes.coffee.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/coffee.png");
    beanTypes.wax.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/wax.png");
    beanTypes.blue.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/blue.png");
    beanTypes.chili.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/chili.png");
    beanTypes.stink.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/stink.png");
    beanTypes.green.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/green.png");
    beanTypes.soy.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/soy.png");
    beanTypes.black.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/black.png");
    beanTypes.red.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/red.png");
    //beanTypes.garden.texture = loadImage("/Assets/Bohnanza Low-Quality Card Assets/garden.png");
    beanTypes.cocoa.texture = loadImage("/Assets/BohnanzaLow-QualityCardAssets/cocoa.png");
}

function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(2);
    everythingScale = width / 1920;
    yscale = height / (everythingScale * 1080);
}

function draw() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    everythingScale = width / 1920;
    yscale = height / (everythingScale * 1080);
    //console.log(everythingScale);
    scale(everythingScale * sqrt(yscale));
    strokeWeight(2);
    background(255);
    fill(0);
    stroke(0, 0, 0);
    rotateX(rotator * 0.1);
    debugFunctions.drawAxis();
    //rotateY(randomIncrementor/10+1);
    ambientLight(255,255,255);
    display1stPersonHand([beanTypes.coffee, beanTypes.wax, beanTypes.blue, beanTypes.chili, beanTypes.stink], 1.3, -rotator*0.1, {angle:randomIncrementor, magnitude:0.1, index:0});
    
    
    texture(tableTexture);
    rotateX(Math.PI/2);
    translate(0, 120, -100);
    ellipse(0, 0, 1000, 1000, 10);
    translate(0, -120, 100);
    rotateX(-Math.PI/2);
    
    
    randomIncrementor+=0.1;
    //console.log(textureMode);
    console.log(_renderer.textureMode);
}



function display1stPersonHand(handToDisplay, cardScale, angleX, rotation){
    for(let cardDisplayIndex = 0; cardDisplayIndex < handToDisplay.length; cardDisplayIndex++){
        let debugScale = 0.9;
        magnitude = (cardDisplayIndex === rotation.index) * rotation.magnitude;
        texture(handToDisplay[cardDisplayIndex].texture);
        translate( (cardDisplayIndex - (handToDisplay.length - 1) / 2) * 700 / handToDisplay.length * debugScale * cardScale, -50, 500);
        
        //console.log((cardDisplayIndex - (handToDisplay.length - 1) / 2) * 700 / handToDisplay.length);
        //(i - (pointCount - 1) / 2 ) * (100 / pointCount)
        
        rotateX(angleX + sin(rotation.angle) * magnitude);
        rotateY(cos(rotation.angle) * magnitude);
        fill(10);
        //rect(-50 * debugScale * cardScale, -70 * debugScale * cardScale, 100 * debugScale * cardScale, 140 * debugScale * cardScale, 10, 10);
        p5Library.WebGL_RoundedRect(-50 * debugScale * cardScale, -70 * debugScale * cardScale, 100 * debugScale * cardScale, 140 * debugScale * cardScale, 10, 10);
        //quad(-50 * debugScale * cardScale, -70 * debugScale * cardScale, 0,  50 * debugScale * cardScale, -70 * debugScale * cardScale, 0,  50 * debugScale * cardScale, 70 * debugScale * cardScale, 0,  -50 * debugScale * cardScale, 70 * debugScale * cardScale, 0);
        
        rotateY(-cos(rotation.angle) * magnitude);
        rotateX(-angleX - sin(rotation.angle) * magnitude);
        
        translate(-(cardDisplayIndex - (handToDisplay.length - 1) / 2) * 700 / handToDisplay.length * debugScale * cardScale, 50, -500);
    }
}