
function incrementString (strng) {
const regex = /\d*$/
const numberString = strng.match(regex)[0]
const number1 = String(parseInt(numberString, 10)+1)
const dif = numberString.length - number1.length
	
if (strng.match(regex)==0){
	return strng +=1
}else if (dif ==0){
	return strng.replace(regex, number1)
}else {
	return strng.replace(regex,'0'.repeat(dif)+number1) 	
}
}



function incrementStringy(strng){
	regex = /\d*$/
	return strng.replace(regex, e=>{
		if (!e) return '1'
		const add1 = String(parseInt(e)+1)
		const difference = e.length -add1.length
		return difference>0
		? '0'.repeat(difference)+add1
		:add1
	})
}
console.log(incrementString("abc0000123"))
console.log(incrementStringy("abc0000123"))