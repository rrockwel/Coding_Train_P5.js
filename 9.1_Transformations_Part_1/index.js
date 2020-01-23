let a = 0;
let width = 500;
let height = 500;
let x = 100;
let y = 100;



function setup(){
	createCanvas(width,height);
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw(){
	background(0);
	
	// Push Starts New Drawing State (AKA Lets You Move Wherever You Want)
	push();
	// Translate Moves Origin....
	translate(x,y)
	// ... Which Allows Rotation Around Origin Point
	rotate(a);
	fill(255, 100, 50);
	rect(0,0,50,50);

	// Pop Restores Original Drawing State (Zeros Out)
	pop();
	push();

	translate(x*3,y*3);
	rotate(a*2)
	fill(40,100,255);
	rect(7, 0, 150,150);
	


	pop();
	translate(x*3,y*3);
	stroke(255,0,0);
	fill(255,23);
	rect(0,0,200,200);



	a += 1;


}