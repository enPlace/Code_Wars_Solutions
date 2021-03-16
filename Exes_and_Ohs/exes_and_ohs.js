/*Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.*/
//using a loop: 
function XO(str) {
	let xcount = 0; 
	let ocount = 0;
   for (let i in str){
   	if (str.toLowerCase()[i]=='x'){
   		xcount++
   	}if (str.toLowerCase()[i]== 'o'){
   		ocount++
   	}
   }
   return xcount === ocount
}


console.log(XO('Xo'))

//using built in methods: 
function XOs(str){
   return str.toLowerCase().split("o").join("").length == str.toLowerCase().split("x").join("").length
}

console.log(XOs("XHello"))


