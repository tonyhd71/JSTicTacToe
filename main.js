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
	for (let i = 0; i < grids.length;i++) {
        grids[i].addEventListener("click", function() {
			if (grids[i].textContent == 'O' || grids[i].textContent == 'o') {	
				alert("Pick another grid");
			} else {
				grids[i].textContent = 'X';
				console.log(grids[i].id + " id of chosen grid");
				values.splice(grids[i].id, 0, grids[i].id);
				cpuTurn();
			}
		});
	}
}
function cpuTurn() {
	console.log(values + " should be the same");
	let openSlots = values;
	let allValues= [0,1,2,3,4,5,6,7,8];
	for (let j = 0; j < grids.length;j++) {
		if (grids[j].textContent == 'X' || grids[j].textContent == 'x') {
			allValues.splice(j,1);
			console.log("The X id should be missing from this: " + allValues);
			let randomNum = allValues[(Math.floor(Math.random() * allValues.length))];
			let cpuPick = document.createTextNode("CPU has made their move. Your turn now");
			document.getElementById("gamePrompts").appendChild(cpuPick);
			document.getElementById(randomNum).textContent = 'O';
			playerTurn();
		}
	}
}
function handleOpenSlots() {
	//move all stuff of retrieving open grids to here, not inside the other 2 functions
}