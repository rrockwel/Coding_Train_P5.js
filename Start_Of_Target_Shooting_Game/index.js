let width = 1000;
let height = 1000;
let angle = 0;
let targetRadius = 240;
let satelliteRadius = 40;
let numberOfSatellites = 12;
let step = 360/numberOfSatellites;
let satellites = [];
let rotation = 0


function setup(){
	background(150,10);
	createCanvas(width,height);
	angleMode(DEGREES);
	rectMode(CENTER);	

	translate(width/2,height/2);
	for(i = 0; i < numberOfSatellites; i++){

		let x = targetRadius * sin(angle);
		let y = targetRadius * cos(angle);
		let d = satelliteRadius * 2


		// Create New Ellipse At Coordinates
		let p = new Satellite(x,y,d);

		// Increase Angle to circle around target
		angle = angle + step;

		// Push new ellipse to array
		satellites.push(p);

	}
}



function draw(){
	background(150);
	translate(width/2,height/2);
	rotate(rotation);
	for(let i = 0; i < satellites.length; i++){
		satellites[i].show(i);

	}

	rotation = rotation+.5;


}

function mousePressed(){
	// Iterate through array in reverse order so when an item is removed
	// the next item doesn't get skipped (which happens if iterated over
	// in regular sequential order);
	console.log(satellites);
	console.log(mouseX,mouseY);
	for(let i = satellites.length-1; i >=0; i--){	
		if(satellites[i].contains(mouseX,mouseY, satellites)){
			satellites.splice(i,1);
		}
	}
}



class Satellite {
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	}

	contains(x,y){
		this.newX = this.x + width/2;
		this.newY = this.y + height/2;
		// console.log('New X: ' + this.newX);
		// console.log('New Y: ' + this.newY);
		return (dist(this.newX,this.newY,x,y)<this.r/2)
	}

	show(i){

		ellipse(this.x,this.y,this.r);
		text(i, this.x,this.y);
	}




}