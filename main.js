const grids = document.getElementsByClassName("grid");
let startBtn = document.getElementById("gameStartBtn");
let x = "X";
let o = "O";
let values = [0,0,0,0,0,0,0,0];
function startGame() {
	const player1ChooseX = document.createElement("p");
	const player1ChooseXTextNode = document.createTextNode("You will be X. Choose a grid to place an X in");
	player1ChooseX.appendChild(player1ChooseXTextNode);
	document.getElementById("gamePrompts").appendChild(player1ChooseX);
	playerTurn();
}
function playerTurn() {
	for (let i = 0; i < grids.length-1;i++) {
        grids[i].addEventListener("click", function() {
			if (grids[i].textContent == 'O' || grids[i].textContent == 'o') {	
				alert("Pick another grid");
			} else {
				grids[i].textContent = 'X';
				console.log(grids[i].id);
				values.splice(grids[i].id, 0, grids[i].id);
				cpuTurn();
			}
		});
	}
}
function cpuTurn() {
	console.log(values + " should be the same");
	let openSlots = values;
	for (let j = 0; j < grids.length-1;j++) {
		if (grids[i].textContent == 'X' || grids[i].textContent == 'x') {
			console.log("Player 2 turn " + grids[i].id)
		}
	}
}