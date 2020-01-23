let bubble;
let bubble2;

function setup(){
	createCanvas(800, 800);
	bubble = new Bubble();
	bubble2 = new Bubble();
	print(this.x,this.y);
}


function draw(){
	background(200,100,32);
	bubble.move();
	bubble.show();
	bubble2.move();
	bubble2.show();
	
}


class Bubble{
	constructor(){
		this.x=200;
		this.y=150;
	}

	move(){
		this.x = this.x+random(-5,5);
		this.y = this.y+random(-5,5);
	}

	show(){
		stroke(255);
		strokeWeight(2);
		noFill();
		ellipse(this.x,this.y, 20,20);
	}
}



