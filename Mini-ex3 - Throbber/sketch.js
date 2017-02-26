//variabler
var img;
var img2;
var img3; 
var sound;
var forbedring; 
var x = 12; 
var y = 12;
//Loader billeder
function preload() {
 img = loadImage('assets/trump.jpg');
    img2 = loadImage('assets/putin.jpg'); 
    img3 = loadImage('assets/un.jpg');
    sound = loadSound('assets/Darude.mp3'); 
    forbedring = loadSound('assets/forbedring.mp3'); 
}

function setup() {
createCanvas(820, 600); //kanvas
frameRate(9); //Framerate
sound.play(); 
}

function draw() {
background(255, 255, 255, 70); //Det her er vores bette baggrund med en lille opcaitet

    //Det her er vores bette UN logo
push(); 
imageMode(CENTER); //Sørger for at kaste billedet ind med en centrum værdi, så det er helt centreret
translate(width/2, height/2);
image(img3, 0, 0);
pop();

    //Her har vi vores lille bitte Trump der drejer rundt om vores lille bitte sol putin
push(); 
translate(width/2, height/2); //Sørger for at der er et centrum
var cir = 360/9*(frameCount%9); //Inddeler intervallet hvori den tegnes
rotate(radians(cir)); //Forklarer den her basse hvorledes den skal roteres baseret på variable cir
image(img, 60, 0, height/x, width/x); //Fandme den gode gamle trump
pop();
    
    //Hernede skal vi have et stykke med Putin i centrum af vores bette politiske solsystem
push();
imageMode(CENTER);
translate(width/2, height/2);
image(img2, 0, 0, height/y, width/y);
pop();
}
