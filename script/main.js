// select your elements first - what is the user going to interact with?
// These are the targets => these are what "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector('#navButton');

// this is a 1 to many connection to an element in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
}

function handleDragOver(e) { e.preventDefault(); }

function handleDrop(e) {
	// block the default behaviour 
	e.preventDefault();
  
	// if there is already a puzzle piece in the drop zone, remove it before adding the new piece
	if (e.target.children.length > 0) {
		// if a puzzle piece is already in the drop zone, add it back to the puzzle pieces
		document.querySelector('.puzzle-pieces').appendChild(e.target.children[0]);
	}
  
	// append the dragged piece to the drop zone
	e.target.appendChild(draggedPiece);
}  


// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBgImage));
// add the drag start handler to all the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener(`dragstart`, handleStartDrag));
// add the dragover handling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockfaultBehaviour(e) {
	// dont let the default behaviour of certain elements happen - block it 
	e.preventDefault();
}

// temp handling
templink.addEventListener('click', blockfaultBehaviour);
