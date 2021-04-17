function digitize(n) {
  array =n.toString().split("").reverse()
  numarray= []
  array.forEach(number =>{
    numarray.push(parseInt(number))
    
  })
  return numarray
}

//using .map() method


function digitize(n) {
  array =n.toString().split("").reverse()
  return array.map(Number)

}
console.log(digitize(4424))