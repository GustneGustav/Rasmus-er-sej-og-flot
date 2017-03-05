//her har vi lækre variabler, en for selve x-aksen, og den anden som konfigurerer vores hastighed på denne.
var x = innerWidth/7;
var y = innerHeight/3;
var xspeed = 10;
var yspeed = 10;
var r, g, b; //vi vil gerne kunne vælge random farver
var a, s, d; //Flere af dem tak
faldervi=false;
løbervi=false;

function setup() {
  createCanvas(innerWidth, innerHeight); //Det her er et smukt canvas
    r=random(255); //Initialiserer de forskellige random farveværdier
    g=random(255);
    b=random(255);
    a=random(255);
    s=random(255);
    d=random(255);
    //Så er der fandme sliders
  xspeedSlider = createSlider(0, 40, 10);
  xspeedSlider.position(20, 20);
  yspeedSlider = createSlider(0, 40, 10);
  yspeedSlider.position(20, 50);
}
function draw() {
////var xspeed = xspeedSlider.value();
////var yspeed = yspeedSlider.value();
    //Baggrund
  background(a, s, d);
    //X-hastighed
  x = x + xspeed;
    if (x > innerWidth || x<0) {
    xspeed = xspeed*-1;
  }
    //Y-hastighed
y = y + yspeed;
  	if (y > windowHeight || y < 0) {
	 	  yspeed = yspeed*-1;
  	}
    //Når X-hastighed er positiv er figuren en cirkel
if (xspeed>0) {
    ellipseMode (CENTER);
   noStroke();
  fill(r, g, b);
  ellipse(x, y, 100, 100);
    //Hvis den er negativ er figuren en firkant
} else if (xspeed<0){
noStroke();
    rectMode (CENTER);
    fill(b, r, g); 
    rect(x, y, 100, 100);
}
    //Når Figuren rammer siderne ændrer den selv farve
    if (x>innerWidth || x<0) {
        r=random(255);
        g=random(255);
        b=random(255);
     } 
    //Når den rammer i toppen eller bunden ændrer baggrunden farve
    if (y>innerHeight || y<0) {
        a=random(255);
        s=random(255);
        d=random(255);
    }
}
