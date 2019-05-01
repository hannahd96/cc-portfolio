let textTyped = "Hi";
let font;
let input;

let textImg;

var pointDensity = 20;
let circleRadius = 10;
let radiusSlider;
let filled = true;

// RGB sliders
let r;
let g;
let b;

var startArray = [];
var finishArray = [];

function preload() {
    font = ("data/FreeSansBold.ttf");
}

function setup() {

    pixelDensity(1);
    // create canvas and ..
    let canvas = createCanvas(750, 450);
    // .. load it into div with that id
    canvas.parent('canvasHolder');
    
    
    // slider to change thickness of points
    radiusSlider = createSlider(1, 20, circleRadius);
    // load slider into div with that id
    radiusSlider.parent('radiusController');
    // when mouse is released, call update function
    radiusSlider.mouseReleased(update);
    
    checkbox = createCheckbox('Fill', true);
    checkbox.parent('fillController');
    checkbox.changed(update);
    
    inputBox = createInput(textTyped);
    inputBox.class("inputBox");
    inputBox.input(update);
    inputBox.parent('inputBoxController');
    
    // calls this function
    setupText();

    
  // create sliders for background color
  rSlider = createSlider(0, 255, 100);
  rSlider.parent('redController');
  gSlider = createSlider(0, 255, 0);
  gSlider.parent('greenController');
  bSlider = createSlider(0, 255, 255);
  bSlider.parent('blueController');
}

function setupText(){
    // creates and returns a new p5 Renderer object
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    // background color
    textImg.background(255);
    // text size
    textImg.textSize(200);
    // font size
    textImg.textFont(font);
    // text value and it's x, y  pos on canvas
    textImg.text(textTyped, 200, 300);
    // call load pixels function
    textImg.loadPixels();
}

function draw(){ 
    // r is equal to the red slider value
    r = rSlider.value();
    // g is equal to the green slider value
    g = gSlider.value();
    // b is equal to the blue slider value
    b = bSlider.value();
    background(r, g, b);
    text('red', rSlider.x * 2 + rSlider.width, 35);
    text('green', gSlider.x * 2 + gSlider.width, 65);
    text('blue', bSlider.x * 2 + bSlider.width, 95);
  
    fill(0);
    noStroke();
    
    for (var x=0; x < textImg.width; x += pointDensity){
        for (var y=0; y < textImg.height; y += pointDensity){

            var index = (x + y * textImg.width) * 4;
            var ran = textImg.pixels[index];

            if (ran < 128){

//                startArray.push({
//                    //
//                });
//                
//                finishArray.push({
//                    //
//                });
               
                if(filled){
                    fill(0);
                    noStroke();
                    ellipse(x, y, circleRadius, circleRadius);
                } else {
                    noFill();
                    stroke(0);
                    ellipse(x, y, circleRadius, circleRadius);
                } 
            }  
        }
    }   
}

function update(){
    circleRadius = radiusSlider.value();

//    animateText = button;
    
    textTyped = inputBox.value();

    if (checkbox.checked() == 1) {
    filled = 1;
  } else {
    filled = 0;
  }
    
    setupText();
    
}