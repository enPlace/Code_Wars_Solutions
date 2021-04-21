arr1 =[1,65,4,5,8,2,9,89,34,1,23,56]

arr2= [3,2,1]

function insertionSort(array){
	for(let i =1; i<array.length; i++){
		let j = i
		while(array[j]< array[j-1]){
			let current = array[j]
			let prev = array[j-1]
			array[j] = prev
			array[j-1] = current
			j--
			console.log(array)
		}
	}
	return array
}

console.log(insertionSort(arr1))