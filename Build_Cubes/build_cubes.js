function findNb(m) {
 	let sum = 0
 	for (i=1; i<m+1; i++){
	sum +=i**3; 
	if (sum == m){
		return i
	};
	if (sum >m){
		return -1
	};

};
	return -1
}

console.log(findNb(1))