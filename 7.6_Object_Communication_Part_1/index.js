// let bubbles = []

let bubble1;
let bubble2;

function setup(){
	createCanvas(700,600);
	// for(let i = 0; i < 10; i++){
	// 	let x = random(width);
	// 	let y = random(height);
	// 	let r = random(5,15);
	// 	let b = new Bubble(x,y,r);
	// 	bubbles.push(b);
	// 	console.log(bubbles);

	// }

	bubble1 = new Bubble(200,200, 35);
	bubble2 = new Bubble(300,300);
}

function draw(){
	background(0);
	// for(let i = 0; i < bubbles.length; i++){
	// 	bubbles[i].move();
	// 	bubbles[i].show();
	// }
	if(bubble1.intersects(bubble2)){
		background(200,0,200);
	}
	bubble1.show();
	bubble1.move();
	bubble2.show();
	bubble2.move();
	
}


class Bubble{
	// ES6 Allows to Use Defaults for Parameters
	constructor(x,y,r=10){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = {
			r: 10,
			g: 100,
			b: 200
		}
	}

	move(){
		// Horizontal Direction
		this.x = this.x + random(-3,3);
		// Vertical Direction
		this.y = this.y + random(-3,3);
	}

	contains(x,y){
		return dist(x,y,this.x,this.y)<=this.r;
	}

	intersects(other){
		let distance = dist(this.x,this.y,other.x,other.y)
		return distance < this.r + other.r;
	}

	show(){
		strokeWeight(2);
		fill(this.color.r, this.color.g, this.color.b);
		ellipse(this.x, this.y, this.r * 2);
	}
}

