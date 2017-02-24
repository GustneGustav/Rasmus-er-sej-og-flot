var video;
function setup() { 
  createCanvas(820, 600);
video=createVideo('Video/gameover.webm');
 video.loop();
 video.hide();
}
function draw() {
  image(video,0,0);
}