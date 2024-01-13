const grids = document.getElementsByClassName("grid");
let startBtn = document.getElementById("gameStartBtn");
let x = "X";
let o = "O";
let values = [0,1,2,3,4,5,6,7,8];
function startGame() {
	const player1ChooseX = document.createElement("p");
	const player1ChooseXTextNode = document.createTextNode("You will be X. Choose a grid to place an X in");
	player1ChooseX.appendChild(player1ChooseXTextNode);
	document.getElementById("gamePrompts").appendChild(player1ChooseX);
	playerTurn();
}
function playerTurn() {
	determineWinner();
	for (let i = 0; i < grids.length;i++) {
        grids[i].addEventListener("click", function() {
			if (grids[i].textContent == 'O' || grids[i].textContent == 'o') {	
				alert("Pick another grid");
			} else {
				grids[i].textContent = 'X';
				values.splice(grids[i].id, 1);
				//handleOpenSlots(grids[i].id)
				console.log("Player picked " +grids[i].id)
				cpuTurn();
			}
		});
	}
}
function cpuTurn() {
	determineWinner();
	console.log(values + " should be the same");
	//let openSlots = values;
	for (let j = 0; j < grids.length;j++) {
		if (grids[j].textContent == 'X' || grids[j].textContent == 'x') {
			values.splice(j,1);
			let randomNum = values[(Math.floor(Math.random() * values.length))];
			let cpuPick = document.createTextNode("CPU has made their move. Your turn now");
			document.getElementById("gamePrompts").appendChild(cpuPick);
			document.getElementById(randomNum).textContent = 'O';
			console.log("CPU picked " +randomNum);
			//playerTurn();
			//return randomNum;
			return;
		}
	}
}
function handleOpenSlots(x) {
	//move all stuff of retrieving open grids to here, not inside the other 2 functions
	alert(values);
	
}
function determineWinner() {
	if (grids[0].textContent == 'X' && grids[1].textContent == 'X' && grids[2].textContent =='X') {
		alert("player wins");
	} else if (grids[3].textContent == 'X' && grids[4].textContent == 'X' && grids[5].textContent =='X') {
		alert("player wins");
	} else if (grids[6].textContent == 'X' && grids[7].textContent == 'X' && grids[8].textContent =='X') {
		alert("player wins");
	} else if (grids[0].textContent == 'X' && grids[3].textContent == 'X' && grids[6].textContent =='X') {
		alert("player wins");
	} else if (grids[1].textContent == 'X' && grids[4].textContent == 'X' && grids[7].textContent =='X') {
		alert("player wins");
	} else if (grids[2].textContent == 'X' && grids[5].textContent == 'X' && grids[8].textContent =='X') {
		alert("player wins");
	} else if (grids[0].textContent == 'X' && grids[4].textContent == 'X' && grids[8].textContent =='X') {
		alert("player wins");
	} else if (grids[2].textContent == 'X' && grids[4].textContent == 'X' && grids[6].textContent =='X') {
		alert("player wins");
	} else if (grids[0].textContent == 'X' && grids[1].textContent == 'X' && grids[2].textContent =='X') {
		alert("player wins");
	} else if (grids[3].textContent == 'O' && grids[4].textContent == 'O' && grids[5].textContent =='O') {
		alert("CPU wins");
	} else if (grids[6].textContent == 'O' && grids[7].textContent == 'O' && grids[8].textContent =='O') {
		alert("CPU wins");
	} else if (grids[0].textContent == 'O' && grids[3].textContent == 'O' && grids[6].textContent =='O') {
		alert("CPU wins");
	} else if (grids[1].textContent == 'O' && grids[4].textContent == 'O' && grids[7].textContent =='O') {
		alert("CPU wins");
	} else if (grids[2].textContent == 'O' && grids[5].textContent == 'O' && grids[8].textContent =='O') {
		alert("CPU wins");
	} else if (grids[0].textContent == 'O' && grids[4].textContent == 'O' && grids[8].textContent =='O') {
		alert("CPU wins");
	} else if (grids[2].textContent == 'O' && grids[4].textContent == 'O' && grids[6].textContent =='O') {
		alert("CPU wins");
	} else if (grids[0].textContent == 'O' && grids[1].textContent == 'O' && grids[2].textContent =='O') {
		alert("CPU wins");
	}
}