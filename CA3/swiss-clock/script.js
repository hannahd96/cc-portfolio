'use strict'

let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;
let hourHandsTaper = 6;
let hourHandLength = 140;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 180;
let minuteHandOffset = 80;
let minuteHandStartWidth = 15;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

let clockRadius = 200;

function setup(){

  createCanvas(500, 500);
  angleMode(DEGREES);
  minuteStrokeColor = color(30,30,30);
  minuteStrokeCap = SQUARE;
  hourStrokeColor = color(30,30,30);
  hourStrokeCap = SQUARE;

}

function draw(){

  background(255);
  strokeCap(SQUARE);

  for (let i = 0; i < 60; i++){
    push();
    translate(width/2, height/2);
    rotate(map(i,0,60,0,360));
    if(i===0 || i%5 ===0){
      strokeWeight(hourStrokeWeight);
      fill(hourStrokeColor);
      line(0, clockRadius - hourStrokeLength, 0, clockRadius);
    } else {
      strokeWeight(minuteStrokeWeight);
      fill(minuteStrokeColor);
      line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
    }
    pop();
  }

  push();
  noStroke();
  fill(30,30,30);
  translate(width/2,height/2);
  
  let hr = hour();
  let hourAngle = map(hr, 0,12,0,360);
  rotate(hourAngle+270);
  
  beginShape();
  vertex(-hourHandOffset, -hourHandStartWidth/2);
  vertex(hourHandLength,- hourHandStartWidth/2+hourHandsTaper/2);
  vertex(hourHandLength, hourHandStartWidth/2-hourHandsTaper/2);
  vertex(-hourHandOffset, hourHandStartWidth/2);
  endShape();
  pop();

  push();
  noStroke();
  fill(30,30,30);
  translate(width/2,height/2);
  
  let mn = minute();
  let minuteAngle = map(mn,0,60,0,360);
  rotate(minuteAngle+270);
  
  beginShape();
  vertex(-minuteHandOffset, -minuteHandStartWidth/2);
  vertex(minuteHandLength,-minuteHandStartWidth/2+minuteHandsTaper/2);
  vertex(minuteHandLength,minuteHandStartWidth/2-minuteHandsTaper/2);
  vertex(-minuteHandOffset,minuteHandStartWidth/2);
  endShape();
  pop();

  push();
  fill("red");
  noStroke();
  let sc = second();
  let secondAngle = map(sc, 0, 60, 0, 360);
  translate(width/2, height/2);
  rotate(secondAngle+270);
  
  beginShape(); //used taper here to aknowledge it is there
  vertex(-secondHandOffset, - secondHandStartWidth/2);
  vertex(secondHandLength, - secondHandStartWidth/2 + secondHandsTaper/2);
  vertex(secondHandLength, secondHandStartWidth/2 - secondHandsTaper/2);
  vertex(-secondHandOffset, secondHandStartWidth/2);
  endShape();
  ellipse(0,0,15,15);
  ellipse(secondHandLength-25/2+1, 0, 25, 25);
  pop();
}