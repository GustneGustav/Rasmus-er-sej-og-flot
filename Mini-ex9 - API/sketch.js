var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=";
var input;
var i = 0;
var giphy;

function preload() {
kasse = loadImage('assets/kasse.jpg');
}
function setup() {
  createCanvas(497, 500);
    image(kasse, 0, 0);
var button1 = select('#submit');
button1.mousePressed(gifAsk);
    input = select('#search');
    button1.position(60, 410);
var button2 = select('#next');
    button2.mousePressed(Next);
    input = select('#search');
    button2.position(375, 410);
    input.position(175, 410);
    
}

function gifAsk() {
  removeElements();
  var url = api + apiKey + query + input.value();
  loadJSON(url, gotData);
    i=0;
}
function gotData(giphy) {
    removeElements();
        fnefne = createImg(giphy.data[i].images.original.url);
    fnefne.position(59, 91);
    fnefne.style("max-width", "375px");
    fnefne.style("max-height", "273px");
    fnefne.style("min-height", "273px");
    fnefne.style("min-width", "375px");
    
    //fnefne.resize(340, 250);
}

function Next() {
    removeElements();
      var url = api + apiKey + query + input.value();
  loadJSON(url, gotData);
    i+=1;
}
