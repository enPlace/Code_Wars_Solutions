//Using if/else if
function basicOp(operation, value1, value2){
if(operation =="+"){
  return value1 + value2
  
}else if(operation == "-"){
  return value1 - value2
  
}else if(operation =='*'){
  return value1 * value2
  
}else if(operation =='/'){
  return value1 / value2
}
}

//using switch statements 

function basicOp(operation, value1, value2){
	switch(operation){
	case '+':
	return value1 + value2
	case '-':
	return value1 - value2
	case '/':
	return value1 / value2
	case '*':
	return value1 * value2
	default: return 0
}
  }

//using the eval() method, which evaluates a string and runs it as js code

function basicOp(operation, value1, value2){
return eval(value1 + operation + value2)
  }