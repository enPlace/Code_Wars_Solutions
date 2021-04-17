function countPositivesSumNegatives(input) {
    if (input === null ||input.length ==0) return [] 
  	let count = 0
    let sum = 0
    input.forEach(num=>{
      return (num >0) ? count++ : sum +=num
    })
  return [count, sum]
}t,