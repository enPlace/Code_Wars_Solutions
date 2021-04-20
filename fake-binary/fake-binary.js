

function fakeBin(x){
let zeroes = /[0-4]/g
let ones = /[5-9]/g
return x.replace(zeroes, "0").replace(ones, "1")
}