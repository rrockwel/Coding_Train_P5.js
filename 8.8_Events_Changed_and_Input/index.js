let textBox;
let slider;
let paragraph;
let pArray;
let psArray;

function setup(){
	noCanvas();
	
	textBox = createInput('Enter Text');
	slider = createSlider(10,64,16);
	paragraph = createP("Starting Text");

	textBox.input(updateText)
	slider.input(updateTextSize)
	
	pArray = selectAll('p');
	psArray = Array.from(document.querySelectorAll('p'))

	console.log(pArray);
	console.log(psArray);
	for(let i = 0; i < pArray.length; i++){
		pArray[i].style('font-size', '48pt');
	}
	for(let i = 0 ; i < psArray.length; i++){
		$(psArray[i]).css('backgroundColor','purple');
	}

}

function updateText(){
	paragraph.html(textBox.value());
}


function updateTextSize(){
	paragraph.style('font-size', slider.value()+'pt');
}