mustContain = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
mustNotContain = /\s/

console.log(!mustNotContain.test(""))

function validate(password) {
  const mustContain = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
  const mustNotContain = /\s/
  if (mustContain.test(password)&& !mustNotContain.test(password)){
    return true
  }else{
    return false
  }
  }