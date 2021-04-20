array = [1,2,5,4,3]

array2 = [2,3,4]
let i = "wednesday"
array[2] = i
console.log(array)


function sorting(arr){
	for (let i =1; i<arr.length; i++){
		let j = i
	while(arr[j]<arr[j-1]){
		let current = arr[j]
		let prev = arr[j-1]
		arr[j-1] = current
		arr[j] = prev
		j--
	}
}

/*	
	*/
	return arr
}
console.log(sorting([3,2,1,5,3,7,10,1,6]))