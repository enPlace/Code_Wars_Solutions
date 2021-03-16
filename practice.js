function camelCase(text){
	let arr = text.replace(/-/g, "_").split("_")
	let camel= arr.shift()
	for (i = 0; i< arr.length; i++){
		camel += arr[i][0].toUpperCase() + arr[i].slice(1)
	}
	return camel 
}
console.log(camelCase("a-Cat_was-a_kitty-Before"))