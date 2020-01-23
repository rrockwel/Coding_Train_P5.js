function setup(){
	createCanvas(400,400);
}

let x = [120, 364];
let y = [354, 54];
let radius = [10,15];
let r = [100,200];
let g = [231,54];
let b = [107,190];

function draw(){
	background(0);
	for(let i = 0; i < x.length; i++){
			fill(r[i],g[i],b[i]);
			ellipse(x[i],y[i],radius[i]);
	}
}