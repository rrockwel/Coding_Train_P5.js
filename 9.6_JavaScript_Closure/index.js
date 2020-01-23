let x = 0;
let timer1;
let timer2;

function setup(){
	createCanvas(200,200);
	timer1 = createP('timer1');
	timer2=createP('timer2');

	makeTimer(timer1,300);
	makeTimer(timer2,600);
	
}


// Closure (defining timeIt inside of makeTimer) 
function makeTimer(element, speed){
	let counter = 0;
	setInterval(timeIt,speed);

	function timeIt(){
		element.html(counter);
		counter++
	}
}





function draw(){
	background(51);
	stroke(255);
	line(x,0,x,height);

	x = x + 3;
	if( x > width ) {
		x = 0;
	}	
}