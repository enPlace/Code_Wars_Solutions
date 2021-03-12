function rowSumOddNumbers(n) {
	let numcount = 0; //total numbers in odd array
	for (i=1; i< n+1; i++){
		numcount +=i}; 

	let oddArray = []; 
	for (j=1; j< (numcount*2)+1; j+=2){
		oddArray.push(j)}; //gives us our odd array length numcount

	const reducer = (accumulator, currentValue)=>accumulator +currentValue; //sum function
	return oddArray.slice(-n).reduce(reducer)  //returns sum of last n numbers of array
};

console.log(rowSumOddNumbers(3))


