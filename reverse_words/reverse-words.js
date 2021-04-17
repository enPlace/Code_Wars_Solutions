//1. Using a for loop to reverse manually

function reverseWords(str){
  array = str.split(" ")
  backwords= ""
  for (let i = array.length-1; i>-1; i--){
    backwords += array[i] + " "
  }
    return backwords.slice(0, backwords.length-1)
}

// 2. using the .reverse() and .join() methods

function reverseWords(str){
	return str.split(" ").reverse().join(" ")
}
console.log(reverseWords("hello world"))