function Particle(x,y){
	this.x = x;
	this.y = y;

	this.history = []
	this.color = 0;

	this.update = function(){
		
		// Create Random Motion of particle on the canvas
		this.x += random(-15,15);
		this.y += random(-15,15);

		// Ensure the particle stays on the canvas
		if(this.x > width){
			this.x -= 50;
		}
		if(this.x < 0){
			this.x += 50;
		}
		if(this.y > height){
			this.y -= 50;
		}
		if(this.y < 0){
			this.y += 50;
		}

		
		// Create vector from current particle coordinates
		let v = createVector(this.x,this.y);
		// Store vector in history array
		this.history.push(v);

		// Limit size of history array		
		if (this.history.length>25){
			this.history.splice(0,1);
		}

		
	}

	this.show = function(){
		stroke(0);
		fill(0,150);
		ellipse(this.x,this.y,24,24);
		
		// Iterate Through history array and draw eliipse
		for (let i = 0; i < this.history.length; i++){
			let pos = this.history[i];
			fill(this.color);
			// Increment color to draw particles darker and darker
			this.color+= .05
			if(this.color >= 255){
				this.color=0;
			}

			// Draw first item (last in trail) the smallest
			ellipse(pos.x,pos.y, i);
		}
	}
}

