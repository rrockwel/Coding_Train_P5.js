let bgColor;
let colorButton;

function setup(){
	createCanvas(200,200)
	bgColor = color(200);

	// Add Button
	colorButton = createButton('Change Background Color');

	// Connect mousePressed listener to button with callback to change background color
	colorButton.mousePressed(changeColor);

}

function changeColor(){
	bgColor = color(random(255));
}

function draw(){
	background(bgColor);
	fill(255,0,178);
	rect(100,100,50,50);

}