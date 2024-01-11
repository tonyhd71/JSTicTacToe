const grids = document.getElementsByClassName("grid");
let x = "X";
let o = "O";
function startGame() {
	const player1ChooseX = document.createElement("p");
	const player1ChooseXTextNode = document.createTextNode("You will be X. Choose a grid to place an X in");
	player1ChooseX.appendChild(player1ChooseXTextNode);
	document.getElementById("gamePrompts").appendChild(player1ChooseX);
	playerTurn();
}
function playerTurn() {
	for (let i = 0; i < grids.length;i++) {
		//console.log(grids[i]);
        grids[i].addEventListener("click", function() {
			if (grids[i] != 'X' && grids[i] != 'x') {
				grids[i].innerHTML = 'X';
			}
		});
	}
}
function cpuTurn() {
	//
}