function toCamelCase(str){
if (str.length== 0){
	return str
}
let arr = str.replace(/_/g, '-').split("-")
let string = arr.shift()
for (i=0; i<arr.length; i++){
	string += arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
}

return string
}

console.log(toCamelCase("a_pippi_Was-Pippi"))