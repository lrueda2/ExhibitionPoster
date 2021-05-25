let part;
var a = 20;
var c = 20;
var d = 20;
// var e = 20;
var speed = 5;
var angle = 0;
var angInc = 1;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let mySound;

let xspeed = 4;
let xpos = 0;

var spot = {
  x: 100,
  y: 50,
};

var col = {
  r: 255,
  g: 0,
  b: 0,
};
var angle = 0;

var angInc = 1;
//var img;
//var clarendon;

function preload(){
	// comic = loadFont("assets/ComicSan.otf");
	img = loadImage('honduras.png');
	img1 = loadImage('mexico.png');
	img2 = loadImage('PuertoRico.png');
	img3 = loadImage('Ecuador.png');
	img4 = loadImage('Peru.png');
	img5 = loadImage('Guatemala.png');
	img6 = loadImage('Venezuela.png');
	img7 = loadImage('ElSalvador.png');
	img8 = loadImage('Chile.png');
	soundFormats('mp3', 'ogg');
	mySound = loadSound('CameraBeep.mp3');
}

function setup() {
	canvas = createCanvas(750, 1125);
    canvas.position(350, 0);
    canvas.mousePressed(canvasPressed);
    part = 1;
}

function draw(){
if (part == 1) {
background(0);
textSize(14);
textAlign(CENTER);
fill(255);
textStyle(BOLD);
text('Press Enter to Open', 0, 680, width);
//next page
//background color
} else if (part == 2) {
  if (mouseIsPressed) {
  background(225, 0, 61);
//Latin Flags
//Mexico
for(var d = 0; d < 1; d++){
if(d%2==1){
}
push();
translate(90+20*d,125);
rotate(radians(angle));
imageMode(CENTER);
image(img1, 0, 20);
pop();
}
//Honduras
for(var c = 0; c < 1; c++){
if(c%2==1){
}
push();
translate(630,90+90*c);
rotate(radians(angle));
imageMode(CENTER);
image(img, 0, 0);
pop();
}
  //Puerto Rico
for(var a = 0; a < 1; a++){
if(a%2==1){
}
push();
// translate(90+40*a,325);
translate(65+40*a,855);
rotate(radians(angle));
imageMode(CENTER);
image(img2, 0, 20);
pop();
}
//Ecuador
for(var e = 0; e < 1; e++){
if(e%2==1){
}
push();
translate(155+40*e,855);
imageMode(CENTER);
rotate(radians(angle));
image(img3,0,0);
pop();
}
//Peru
for(var f = 0; f < 1; f++){
if(f%2==1){
}
push();
translate(245+40*f,855);
imageMode(CENTER);
rotate(radians(angle));
image(img4,0,0);
pop();
}
//Guatemala
for(var h = 0; h < 1; h++){
if(h%2==1){
}
push();
translate(365+40*h,855);
imageMode(CENTER);
rotate(radians(angle));
image(img5,0,0);
pop();
}
//Venezuela
for(var i = 0; i < 1; i++){
if(i%2==1){
}
push();
translate(475+40*i,855);
imageMode(CENTER);
rotate(radians(angle));
image(img6,0,0);
pop();
}
//El Salvador
for(var j = 0; j < 1; j++){
if(j%2==1){
}
push();
translate(585+40*j,855);
imageMode(CENTER);
rotate(radians(angle));
image(img7,0,0);
pop();
}
//Chile
for(var k = 0; k < 1; k++){
if(k%2==1){
}
push();
translate(695+40*k,855);
imageMode(CENTER);
rotate(radians(angle));
image(img8,0,0);
pop();
angle = angle + angInc;
}
} else {
  background(219, 205, 172);
}
//Mouse circle
fill(255,192,203);
noStroke();
circle(mouseX, mouseY, 20);

  //title
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(32 + (mouseX / width)*72);
  textAlign(CENTER, TOP);
  textFont('ComicSans');
  text('Americanos: Latino Life in the United States', 0, 40, width, height);


  //Artist
  if (mouseIsPressed) {
    fill(255, 255, 0);
  }
  else {
    fill(55, 28, 15);
  }
  textSize(24);
   noStroke();
  textAlign(CENTER);
  text('Curator: Liliana Nieto del Rio', 0, 260, width);

  if (mouseY < height/2){
  //description
   if (mouseIsPressed) {
    fill(255, 255, 0);
  }
  else {
    fill(55, 28, 15);
  }
  textSize(18);
  textAlign(LEFT);
  noStroke();
  text('Celebrate the extraordinary diversity of Latino cultures', 40, 400, width);
  text('in the United States. Taken by 30 photojournalists,', 40, 420, width);
  text('over 100 photographs create a bold and artist portrait', 40, 440, width);
  text('of a people who share much in common and yet are as', 40, 460, width);
  text('varied as America itslef. This exhibition is being shown', 40, 480, width);
  text('in Chicago through a unique partnership between The', 40, 500, width);
  text('Field Museum and the Mexican Fine Arts Center Museum', 40, 520, width);
}
if (mouseY >= height/2) {
  //location
   if (mouseIsPressed) {
    fill(255, 255, 0);
  }
  else {
    fill(55, 28, 15);
  }
  textSize(18);
  textAlign(LEFT);
  noStroke();
  text('Mational Museum of Mexican Art', 40, 620, width);
  text('Location: 1852 W. 19th street', 40, 640, width);
  text('Chicago, IL 60608', 40, 680, width);
}

  //date and time
   if (mouseIsPressed) {
    fill(255, 255, 0);
    textSize(22);
  }
  else {
    fill(55, 28, 15);
    textSize(14);
  }
  // textAlign(CENTER);
  noStroke();
  textStyle(BOLD);
  text('Saturday, August 19, 2000 to Sunday, November 12, 2000', xpos, 1040, width);
  if ((xpos > width) || (xpos < 0)) {
    xspeed = xspeed * -1;
  }
  xpos += xspeed;

}
}

function canvasPressed() {
  mySound.Play();
}


function keyPressed(){
	if(keyCode == 13){
		part = 2;
	}
	if(keyCode == 65){
		angInc = -angInc;
	}
}
