let bubble;
let bubble2;


function setup(){
	createCanvas(800, 800);
	bubble = new Bubble(130,275,10,23,100,19, 10,10);
	bubble2 = new Bubble(260,644,134,244,10,9, -3, 16);
	bubble3 = new Bubble(243,532,102,34,120,25,14,12);
	print(this.x,this.y);
}


function draw(){
	background(200,100,32);
	bubble.move();
	bubble.show();
	bubble2.move();
	bubble2.show();
	bubble3.move();
	bubble3.show();

	
}


class Bubble{
	// Can use _ to differentiate variables to be passed in
	constructor(_x,y,r,g,b,radius,_xSpeed,ySpeed){
		this.x=_x;
		this.y=y;
		this.r=r;
		this.g=g;
		this.b=b;
		this.radius=radius;
		this.xSpeed=_xSpeed;
		this.ySpeed=ySpeed;
	}

	move(){
		this.x = this.x+this.xSpeed;
		this.y = this.y+this.ySpeed;
		if(this.x>width-this.radius){
			this.xSpeed = -this.xSpeed;
		}
		if(this.x<0 + this.radius){
			this.xSpeed = -this.xSpeed;
		}
		if(this.y>height - this.radius){
			this.ySpeed = -this.ySpeed;
		}
		if(this.y<0 + this.radius){
			this.ySpeed = -this.ySpeed;
		}
	}

	show(){
		stroke(255);
		strokeWeight(2);
		fill(this.r,this.g,this.b);
		ellipse(this.x,this.y, this.radius*2);
	}
}



