/*
 * @name Pointillism
 * @description By Dan Shiffman. Mouse horizontal location controls size of
 * dots. Creates a simple pointillist effect using ellipses colored according
 * to pixels in an image.
 * <p><em><span class="small"> To run this example locally, you will need an
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 */
let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('Travel_poster.png');
  image(0,0,650,400)
}

function setup() {
  createCanvas(650, 400);
  smallPoint = 4;
  largePoint = 40;

  noStroke();
  background(255);
  img.loadPixels();
  imageMode(CENTER);
  frameRate(9000);
}

function draw() {
  img.resize(650, 400);
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 0);
  ellipse(x, y, pointillize, pointillize);

}
