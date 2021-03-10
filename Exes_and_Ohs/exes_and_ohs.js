/*Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.*/

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


x='hello'
console.log(typeof x)
console.log(xcount)