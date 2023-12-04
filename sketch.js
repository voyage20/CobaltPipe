let Raphael;
let img;
let playButton;

function preload() {
  Raphael = loadSound("Raphael.m4a");
  img = loadImage('volume.png');
}

function setup() {
  createCanvas(1000, 1000);

  // Create a play button
  playButton = createButton('Play');
  playButton.position(400, 600);
  playButton.size(150, 60); // Set the size of the button
  playButton.mousePressed(toggleSound);
  playButton.style('font-size', '40px'); // Set the font size of the button text

}

function draw() {
  background("black");

  // Display "Volume UP" text
  fill("white");
  textSize(20);

  // Display volume control image
  image(img, 350, 300, 320, 350);

  // Display additional text when the sound is not playing
  if (!Raphael.isPlaying()) {
    fill("white");
    textSize(20);
    text("Raphael tragically passed away from a collapsing mine on April 16, 2018", 100, 300);
  }
}

function toggleSound() {
  // Toggle between playing and stopping the sound
  if (Raphael.isPlaying()) {
    Raphael.stop();
    playButton.html('Play');
  } else {
    Raphael.play();
    playButton.html('Pause');

    // Display additional text when the sound is not playing
    fill("white");
    textSize(20);
    text("Raphael tragically passed away from a collapsing mine on April 16, 2018", 100, 300);
  }
}

// Adjust the volume when the mouse is dragged over the volume control image
function mouseDragged() {
  if (mouseX > 50 && mouseX < 170 && mouseY > 50 && mouseY < 200) {
    let volumeLevel = map(mouseY, 50, 200, 0, 1);
    Raphael.setVolume(volumeLevel);
  }
}
