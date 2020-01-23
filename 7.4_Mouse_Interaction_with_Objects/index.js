let bubbles = [];


function setup(){
	createCanvas(400,400);
	
	for(let i = 0; i < 10; i++){
		let key = i;
		let x = random(width);
		let y = random(height);
		let r = random(10,20);
		let b = new Bubble(key,x,y,r);
		bubbles.push(b);
		console.log(bubbles);
	}

}

function mousePressed(){
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].clicked(mouseX, mouseY, bubbles);
	}
}







function draw(){
	background(0);
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble{
	constructor(key,x,y,r){
		this.key = key;
		this.x=x;
		this.y=y;
		this.r=r;
		this.color = {
			r: 124,
			g: 200,
			b: 87
		};
	}

	move(){
		// Determine Horizontal Direction
		this.x=this.x+random(-1,1);
		// Determine Vertical Direction
		this.y=this.y+random(-1,1);
	}

	clicked(x,y, bubbles){
		if(dist(x, y, this.x, this.y)<=this.r){

			// Attempt At Removing Bubbles From Array When They Are Clicked On
			/*if(this.key >= bubbles.length){
				bubbles.pop();
			}
			else if(this.key == 1){
				bubbles.shift();
			}else{
			console.log('bubble #' + this.key);
				bubbles.splice(this.key,1);
				console.log(bubbles);
			}*/
			
			// If First Color, Switch to Second Color
			/*if(this.color.r == 124){
				console.log(this.color)
				this.color={r:255,g:100,b:200}
				// Don't Continue or Else Color Will Get Switched Right Back
				return;
			}*/

			// If Second Color, Switch Back to First Color
			/*if(this.color.r == 255){
				console.log(this.color);
				this.color={r:124,g:200,b:87}
			}*/

			// Switch Clicked Bubble To A Random Color
			this.color.r = random(0,255);
			this.color.g = random(0,255);
			this.color.b = random(0,255);
		}
	}

	show(){
		strokeWeight(3);
		fill(this.color.r, this.color.g, this.color.b);
		ellipse(this.x,this.y,this.r*2);
	}
}

