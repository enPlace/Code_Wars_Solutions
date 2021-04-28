



function coolString(s) {
  let characters = /[!@#$%^&*(),.?":{}|<>0-9 ]/g
  let match = characters.test(s)
  let caps = /[A-Z]/
  let lower = /[a-z]/
  let adjacent 
  
  for(let i = 1; i<s.length; i++){
  	if(caps.test(s[i]) && caps.test(s[i-1]) || lower.test(s[i]) && lower.test(s[i-1])){
  		adjacent = true

  	}

  }
  return(adjacent ==true || match == true) ?false : true
  
}


console.log(coolString("HeA1"))

function coolStringy(s) {
  let characters = /[!@#$%^&*(),.?":{}|<>0-9 ]/g
  let match = characters.test(s)
  let caps = /[A-Z]{2}/
  let lower = /[a-z]{2}/
  let adjacent = caps.test(s)|| lower.test(s)


  
  return(adjacent ==true || match == true) ?false : true
  
}
console.log(coolStringy("AA"))

function coolString2(s) {

  return !/[A-Z]{2}|[a-z]{2}/.test(s) && /^[a-zA-Z]*$/.test(s)


 }

  console.log(coolString2("aAAb"))

  alpha = /^[0-9]*$/
  console.log(alpha.test("1234568"))