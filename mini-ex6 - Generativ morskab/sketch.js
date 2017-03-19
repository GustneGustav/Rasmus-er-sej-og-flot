var inc = 0.1;
var cols, rows;
var scl = 10;
var zoff = 0;
var particles = [];
var flowfield = [];

function setup() {
    //Canvas+Columns
  createCanvas(800, 600);
    cols = floor(width / scl);
    rows = floor(height / scl);
//Makes the collumns and rows a field the particles can collide with
flowfield = new Array(cols * rows);
//Makes a bunch of particles (the more you make, the heavier the load)
    for (var i=0; i < 800; i++) { 
      particles[i] = new Particle();
    }
        background(255);
}

function draw() {
//Creates lines along the y-axis
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
//Creates lines along the x-axis
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
//Creates an index for our flowfield
      var index = x + y * cols;
//Creates the angle for the vectors
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
//Creates the vectors
      var v = p5.Vector.fromAngle(angle);
//Sets the magnitude of movement for the particles
      v.setMag(1);
      flowfield[index] = v;
//Assigns the value of xoff, as the increment stated in our variables
      xoff += inc;
    }
//Assigns the value of yoff, as the increment stated in our variables
    yoff += inc;
//Assigns the value at which the flowfield moves in time
    zoff += 0.0003;
  }
//Slams in the cool particles with it's different rules as made in particle.js (another file i created, that is located in libraries)
    for (var i=0; i<particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
}
