function Particle() {
this.pos = createVector (random(width), random(height)); //Initial position
this.vel = createVector(0, 0); //Initial velocity
this.acc = createVector (0, 0); //Initial acceleration
this.maxspeed = 2; //Maxspeed

this.prevPos = this.pos.copy(); //Makes it store the previous position, to avoid skipping pixels when drawing lines
    
this.update = function() { //Updater function to make the pixels change, as to allow for speed etc.
this.vel.add(this.acc); //Updates the velocity based on acceleration
    this.vel.limit(this.maxspeed); //Upper limit for velocity based on maxspeed
this.pos.add(this.vel); //Updates the position based on velocity
this.acc.mult(0); //Clears the acceleration for each frame
}

this.follow = function(vectors) { //Makes the particles follow the flowfield
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors [index];
    this.applyForce(force); 
}

this.applyForce = function(force) { //Gives the walls of the flowfield collision force to alter the particles movement
this.acc.add(force)
}

this.show = function() { //Draws the lines of the particles
stroke(0, 5);
strokeWeight(1);
line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
}

this.updatePrev = function() { //Updater function for the particles, to avoid skipping pixels when drawing lines
  this.prevPos.x = this.pos.x;
  this.prevPos.y = this.pos.y;
}
this.edges = function() { //Edges of for the frame, to make the pixels stay in frame, and not fly out
    if (this.pos.x > width){
    this.pos.x = 0;
    this.updatePrev();
    }
    if (this.pos.x < 0) {
    this.pos.x = width;
    this.updatePrev();
    }
    if (this.pos.y > height) {
    this.pos.y = 0;
    this.updatePrev();
    }
    if (this.pos.y < 0) {
    this.pos.y = height;
    this.updatePrev();
    }
    
}
}