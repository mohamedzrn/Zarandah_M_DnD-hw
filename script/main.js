// select your elements first - what is the user going to interact
// these are the targets=> these are what the "user" uses
// this is a 1to 1 connection to an element in the DOM
// let navButton = document.querySelector'#navButton');

// this is a 1 to many connection to elementss in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');

// functions go in the middle
//these are the "actions" that should happen
function changeBGImage() {
	debugger;
	// object.property = "new values"
	// theHeadline.textContent = "Drag and Drop is fun!";
	// theHeadline.classList.add('orange-headline');

	// change the background image in the drop zone
	puzzleBoard.style.backgroundImage = 'url("../images/backGround"' + this.id + '".jpg")';
	puzzleBoard.style.backgroundImage = url("../../media/examples/lizard.png");
}

// event handling at the bottom -> how things react when you
// how is the user going to interact with the elements / controls you provide?

//
// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));