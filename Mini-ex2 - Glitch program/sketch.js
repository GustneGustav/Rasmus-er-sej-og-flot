function setup() {
  createCanvas(1640, 1011)
  background(0, 0, 0)
}
var value = 255; 
function draw() {
  fill(value); 
    var deg = mouseX; 
	var rad = radians(deg); 
    rotate(rad); 
  rect(0, 0, 200, 200); 
  rect(480, 0, 200, 200); 
  rect(960, 0, 200, 200); 
  rect(1440, 0, 200, 200); 
  rect(0, 270, 200, 200); 
  rect(480, 270, 200, 200); 
  rect(960, 270, 200, 200); 
  rect(1440, 270, 200, 200); 
  rect(0, 540, 200, 200); 
  rect(480, 540, 200, 200); 
  rect(960, 540, 200, 200); 
  rect(1440, 540, 200, 200); 
  rect(0, 810, 200, 200);  
  rect(480, 810, 200, 200);  
  rect(960, 810, 200, 200);  
  rect(1440, 810, 200, 200); 
 }
    function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0; 
}
}