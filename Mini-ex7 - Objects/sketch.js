Grid = [];

rækker = 20;
søjler = 20;

checkboxSize = 19;
OffsetX = 100;
OffsetY = 100;

function setup() {
	createCanvas(windowWidth,windowHeight);
	initializeMap();
}


function initializeMap(){
    
	for(var i = 0; i < søjler; i++)
	{
		for(var j = 0; j < rækker; j++)
		{
			Grid.push([i,j]);
			Grid[i][j] = true;

			Checkb = createCheckbox(' ', false);
			Checkb.position(OffsetX + (checkboxSize * i), OffsetY + (checkboxSize * j));
		}
	}
}
