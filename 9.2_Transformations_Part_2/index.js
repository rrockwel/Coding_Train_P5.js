let width = 400;
let height = 400;
let angle = 0

function setup(){
	createCanvas(width,height);
	angleMode(DEGREES);
	// rectMode(CENTER);
}

function draw(){
	background(0);
	push();
	translate(200,200);
	scale(1, 1);

	rotate(angle);
	stroke(255);
	fill(100);
	rect(0,0,100,50);
	pop();

	angle = angle+2;
}