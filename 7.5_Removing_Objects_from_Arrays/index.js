let bubbles = []

function setup(){
	createCanvas(800,800);
	for(let i = 0; i < 80; i++){
		let x = random(width);
		let y = random(height);
		let r = random(5,35);
		let b = new Bubble(x,y,r);
		bubbles.push(b);
		console.log(bubbles);
	}
}

function mousePressed(){
	// Since Bubbles.splice will remove item at i index and array will then be shortened,
	// the element that takes the place of the deleted element in the array will not be checked.
	// This can be fixed by iterating through the array in reverse order.
	for(let i = bubbles.length-1; i >= 0; i--){
		// True/False Return of Contains function allows use of boolean
		if(bubbles[i].contains(mouseX,mouseY,bubbles, this.key)){
			bubbles.splice(i,1);
		};
	}
}

// function mouseDragged(){
// 		let x = random(width);
// 		let y = random(height);
// 		let r = 5;
// 		let b = new Bubble(mouseX,mouseY,r);
// 		bubbles.push(b);
//}
function draw(){
	background(0);
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}

	// Limit the length of the array to 14
	// if(bubbles.length>14){
	// 	bubbles.splice(0,1);
	// }
}

class Bubble {
	constructor(x,y,r){
		this.x=x;
		this.y=y;
		this.r=r;
		this.color={
			r:random(0,255),
			g:random(0,255),
			b:random(0,255)
		}
	}

	move(){
		// Horizontal Direction
		this.x = this.x + random(-.1,.1);

		// Vertical Direction
		this.y = this.y + random(-.5,.3);
	}

	
	contains(x,y){
		// If click occurs within the radius of the bubble returns true, if not returns false
		return dist(x,y,this.x,this.y)<=this.r;
		}

	show(){
		strokeWeight(1);
		fill(this.color.r, this.color.g, this.color.b);
		ellipse(this.x, this.y, this.r*2);
	}
}