let width = 400;
let height = 400;
let angle = 0;


function setup(){
	createCanvas(width,height);
	angleMode(DEGREES);
	// rectMode(CENTER);
}



function draw(){
	background(0);
	// Push Starts New Drawing State (AKA Lets You Move Wherever You Want)
	push();
	translate(width/2,height/2);
	rotate(angle);
	stroke(255);
	fill(100);
	rect(0,0,100,50);
	// Pop Restores Original Drawing State (Zeros Out).....
	pop();
	

	// ..... Including Fill, Stroke, StrokeWeight, etc.
	ellipse(300,300,60,60);
	angle = angle+2;
}

