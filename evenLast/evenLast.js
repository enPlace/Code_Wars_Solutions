//Using a for loop
function evenLast(numbers) {
  if(numbers.length == 0) return 0
  let sum = 0
  for(let i = 0; i < numbers.length; i += 2){
    sum += numbers[i]
  }
  
  return sum * numbers[numbers.length - 1]
}


//using array.filter()
const evenLast2 =(numbers) =>{
	return (numbers.length==0) ? 0
	: numbers.filter((e,index)=> index%2==0).reduce((a,b)=>a+b)*numbers[numbers.length-1]
}

//using filter() and pop()

const evenLast3 =(numbers) =>{
	return (numbers.length==0) ? 0
	: numbers.filter((e,index)=> index%2==0).reduce((a,b)=>a+b)*numbers.pop()
}

console.log(evenLast3([2,3,4,5]))