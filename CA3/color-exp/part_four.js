'use strict';

var img;
var colorsArray = [];
var sortMode = null;


function preload() {
  img = loadImage('data/pic2.jpg');
}

function setup() {
  createCanvas(1240, 1748);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  var tileCount = floor(width/100);
  var tileSize = width / tileCount;

  img.loadPixels();
  colorsArray = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * tileSize);
      var py = int(gridY * tileSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], 200);
      colorsArray.push(c);
    }
  }
  gd.sortColors(colorsArray, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      console.log(colorsArray[i])
        fill(colorsArray[i]);
        stroke(0);
        
        // blendmode is set to overlay - Uses a combination of Screen blend mode and Multiply blend mode 
        blendMode(OVERLAY);
        var c = random(40,200);
                
      rect(gridX * tileSize +c, gridY * tileSize+c, tileSize+c, tileSize+c);
      i++;
    }
    
  }
  noLoop();
}
// function with actions and their corresponding keys
function keyReleased() {
  // if c is pressed, write a new file and 
  // save image as ase (adobe swatch exchange file) and 
  // uses timestamp from generative design library to name the image
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colorsArray)], gd.timestamp(), 'ase');
  // if s is pressed, save canvas
  // uses timestamp from generative design library to name the image
  // save it as PNG
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

//function keyPressed() {
//    if (key == 'l'){
//        bm = "LIGHTEST";
//    }
//    
//    if(key == 'm'){
//        bm = "MULTIPLY";
//    }
// }