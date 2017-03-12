var grammar;
var trump; 
var ordre;
function preload() {
  trump = loadImage('assets/trump.jpg'); //Trump
  exorders = loadStrings('assets/exorders.json'); //Executive orders
  exorders2 = loadStrings('assets/exorders2.json');//Executive orders syndebukke
}

function setup() {
  trump.resize(innerWidth,innerHeight); //tilpasser billedet til vindue
  createCanvas(innerWidth, innerHeight);
  image(trump, 0, 0); //indsætter billedet
    noLoop();
  grammar = new RiGrammar(exorders.join('\n')); //laver sætninger baseret på vores JSON
  grammar2 = new RiGrammar(exorders2.join('\n')) //Mere af det
  //Laver sætninger
    ordre = []
  for (i = 0; i < 100; i++) {
    ordre[i] = new Order();
  }
}

function draw() {
fill(0);
  push(); //Højre side af bogen konfigureret som tekstfelt
textFont("Times New Roman");
textSize(25);
textAlign(LEFT);
translate(innerWidth/1.35, innerHeight/2.55)
rotate(radians(7.5));
text(order2, 0, 0, innerWidth/5.8, innerHeight/3.4);
pop();

push(); //venstre side af bogen konfigureret som tekstfelt
textFont("Times New Roman");
textSize(25);
textAlign(LEFT);
translate(innerWidth/1.866, innerHeight/2.9)
rotate(radians(7.5));
text(order, 0, 0, innerWidth/5.8, innerHeight/2.6);
pop();
}

function mousePressed() {
  image(trump, 0, 0);
  new Order();
  redraw();
}

function Order() {
  order = grammar.expand();
  order2 = grammar2.expand();
}