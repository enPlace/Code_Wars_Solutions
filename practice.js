function rockPaperScissors(){
	const rps ={0:"Rock", 1: "Paper", 2: "Scissors"}; 
	const randomint = () => {
		return Math.floor(Math.random()*Math.floor(3))
	};
	const player1 = "Rock"; 
	const player2 = "Scissors"; 

	if(player1==player2){
		return "It's a tie, try again!"
	}if((player1 == "Rock" && player2 =='Scissors')||
		(player1=="Paper" && player2 == "Rock")||
		(player1=="Scissors" && player2 == "Paper")){
		return "Player 1 wins! " + `Player 1: ${player1}\nPlayer 2: ${player2}\n`}

};
console.log(rockPaperScissors())