let input;
let analyzer;


input = new p5.AudioIn();

input.start();
var song;


function preload() {
  song = loadSound("Hysh.m4a");
}

function setup() {
  createCanvas(200, 200);
  input = new p5.AudioIn();
  input.start();
}


function draw() {
  background(0);

  let volume = input.getLevel();
  let threshold = 0.3;
  if (volume > threshold) {
    song.play();
  }
  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);

  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
}