let array= [1,2,3,5,4,1,6]

let arr2 = []

let number
//using insertion sort
function solution(nums){
  if (nums ==null ||nums.length ==0) return []
	let arr = nums
  for(let i = 1;i <nums.length; i++){
    let j = i
    while(arr[j] < arr[j-1]){
      let curr = arr[j]
      let prev = arr[j-1]
      arr[j] = prev
      arr[j-1] = curr
      j--
    }
    
  }
  return arr
}

//using sort() method with a compare function 

function solution2(nums){
	return (nums == null || nums.length==0) ?[]

	: nums.sort((a,b) =>a-b)
}


//or 
function solution3(nums){
 return (nums) ? nums.sort((a,b)=> a-b) : []
}

console.log(solution(array))
console.log(solution2(array))
console.log(arr2 == null)
console.log(number)

console.log("____________________________________________________")

console.log(arr2.sort((a,b)=>a-b))