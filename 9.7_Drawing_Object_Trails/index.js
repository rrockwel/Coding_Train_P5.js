let particle;

function setup(){
	createCanvas(400,400);
	particle = new Particle(100,100);
}

function draw(){
	background(100);
	particle.update();
	particle.show();

}