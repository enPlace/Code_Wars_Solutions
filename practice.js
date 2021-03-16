function xo(str){
	let xcount =0;
	let ocount =0;
	for(i = 0; i<str.length; i++){
		if (str.toLowerCase()[i]== 'x'){
			xcount++
		}
		if (str.toLowerCase()[i] =='o'){
			ocount++

		}

	}
	
	return xcount == ocount
}

function xos(str){
	return str.toLowerCase().split("o").join("").length == str.toLowerCase().split("x").join("").length
}
console.log(xos("Xhello"))


console.log("test".split("t").join("").length)