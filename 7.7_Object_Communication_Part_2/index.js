let bubbles = []

function setup(){
	createCanvas(800,800);
	for(let i = 0; i < 50; i++){
		let x = random(width);
		let y = random(height);
		let r = random(6,25);
		let b = new Bubble(x,y,r);
		bubbles.push(b);
	}

}

function mousePressed(){
	for(let i = 0; i < bubbles.length; i++){
		if(bubbles[i].contains(mouseX,mouseY)){
			alert('bubble clicked');
		}
	}
}

function draw(){
	background(0);
	for(let b of bubbles){
		b.move();
		b.show();
		let overlapping = false;
		for(let other of bubbles){
			if(b != other && b.intersects(other)){
				overlapping = true;
			}
			if(overlapping){
				b.changeColor(random(100,255));

			}else{
				b.changeColor(0);
			}
		}
		
	}
}

class Bubble{
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = {
			r: 0,
			g: 0,
			b: 0
		};
		this.brightness = 0;
	}

	changeColor(bright){
		this.brightness = bright;
	}


	contains(pointX, pointY){
		return dist(this.x,this.y,pointX,pointY)<this.r;
	}

	intersects(other){
		return dist(this.x,this.y,other.x,other.y)<=(this.r+other.r);
	}

	move(){
		// Horizontal Direction
			this.x = this.x + random(-1,1);
		// Vertical Direction
			this.y = this.y + random(-1,1);
	}

	show(){
		stroke(255);
		strokeWeight(2);
		fill(this.brightness, random(34,70));
		ellipse(this.x, this.y, this.r * 2);
	}

}