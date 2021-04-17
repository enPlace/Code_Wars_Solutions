function reverseWords(str){
  array = str.split(" ")
  backwords= ""
  for (let i = array.length-1; i>-1; i--){
  	backwords += array[i] +" "


  }

  return backwords.slice(0, backwords.length-1)
}

console.log(reverseWords("hell raiser"))