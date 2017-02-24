var gameover;
function setup() {
createCanvas(820, 600); 
gameover=createVideo('video/gameover.webm');
    gameover.loop();
    gameover.hider(); 
}
function draw() {
background(50); 
    image(gameover, 10, 10); 
}