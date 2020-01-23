let bubbles = [];

function setup(){
	createCanvas(400,400);

	//Create 1000 random bubbles on the screen
	for(let i = 0; i < 3000; i++){
		let x = random(-50, width+50);
		let y = random(150, height+150);
		let r = random(1,6);
		bubbles[i] = new Bubble(x,y,r);
	}

	/// For Of Loop
	for(let bubble of bubbles){
		bubble.move();
		bubble.show();
	}
}


// Create Bubble At MousePressed
function mousePressed(){
	let r = random(10,50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}

// Create Bubbles at MouseDragged
function mouseDragged(){
	let r = random(5,20);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}



function draw(){
	background(0);
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble{
	constructor(x,y,r){
		this.x=x;
		this.y=y;
		this.r=r;
	}

	move(){
		// Determine Horizontal Direction
		this.x=this.x+random(-5,5);
		// Determine Vertical Direction
		this.y=this.y+random(-9,7);
	}

	show(){
		noStroke();
		fill(random(221,255),random(44,255),random(0,2), random(8,12));
		ellipse(this.x,this.y,this.r*2);
	}
}

