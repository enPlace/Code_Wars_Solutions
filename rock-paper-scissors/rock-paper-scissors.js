const rps = (p1, p2) => {
  if(p1==p2) return "Draw!"	
  
  if(p1=="rock") return (p2=="scissors") ?  "Player 1 won!" : "Player 2 won!"
  	  
  if(p1=="scissors")  return (p2=="paper") ?  "Player 1 won!" : "Player 2 won!"
  
  if(p1=="paper")  return (p2=="rock") ?  "Player 1 won!" : "Player 2 won!"
};

console.log(rps("rock", "scissors"))

const rps2 =(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

console.log(rps2("paper", "rock"))