let x = 0;
let timer;
let counter = 1;
let interval;

function setup(){
	createCanvas(200,200);
	timer = createP('')
	startButton = createButton('Start Timer');
	startButton.mousePressed(startTimer);
	stopButton = createButton('Stop Timer');
	stopButton.mousePressed(stopTimer);
	resetButton = createButton('Reset Timer');
	resetButton.mousePressed(clearTime);
}

function draw(){
	background(51);
	stroke(255);
	line(x,0,x,height);

	x = x + 1;
	if ( x > width ){
		x = 0;
	}

}

function startTimer(){
	interval = setInterval(timeIt,1000);
}

function stopTimer(){
	clearInterval(interval);
}

function clearTime(){
	counter=1;
}

function timeIt(){
	timer.html(counter);
	counter++;
}