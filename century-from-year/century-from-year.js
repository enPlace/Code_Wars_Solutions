//Math.floor() method to round down
function century(year) {
  return year%100 ==0 ? year/100 : Math.floor(year/100 +1)
 
}


//Math.ceil() method to round up 

function century(year){
	return Math.ceil(year/100)
}

console.log(century(2001))