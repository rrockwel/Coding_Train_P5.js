let canvas;
let input;
let nameP;
let bgColor =0;

function setup(){
	canvas = createCanvas(200,200);
	input = createInput('Name');
	p = createP(`${input.value()}`);

	input.input(updateBackground);
	input.changed(updateBackground);
}

function update(){
	input.value() = input.value();
}

function updateBackground(){
	bgColor = color(random(255));
}

function draw(){
	background(bgColor);
	fill(250,200,200);
	text(`${input.value()}'s Canvas`, 20,20);

}