
function abbrevName(name){
 const arr =name.toUpperCase().split(" ")
 return arr[0][0] +"." + arr[1][0]

}

//using map()

function abbrevName(name){
	return name.toUpperCase().split(" ").map(x=>{return x[0]}).join(".")

}

//or using map() like this, with abbreviated function syntax
function abbrevName(name){

   return name.toUpperCase().split(" ").map(x=> x[0]).join(".")

}