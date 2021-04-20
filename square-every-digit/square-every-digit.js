function squareDigits(num){
  return parseInt(num.toString().split("").map(x=>x**2).join(""))
  
}

console.log(squareDigits(95))