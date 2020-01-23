let bgColor;
let colorButton;
let slider;
let input;

function setup(){
	canvas = createCanvas(200,200);
	bgColor = color(200);
	colorButton = createButton("Change Background Color");
	colorButton.mousePressed(changeColor);

	slider = createSlider(10,180,0);
	console.log(slider);
	
	input = createInput("Name");
}

function changeColor(){
	bgColor = color(random(255));
}



function draw(){
	background(bgColor);
	fill(255,23,235);
	ellipse(100,100,slider.value(),slider.value());
	text(`${input.value()}'s Canvas`, 10,20);
}