// return masked string
function maskify(cc) {
	let lastfour=  cc.slice(-4, cc.length)
	let hidden = cc.slice(0,-4).split("").map(x=>x="#").join("")
	return hidden +lastfour
}

console.log(maskify("987654321"))


// return masked string
function maskify(cc) {
  return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}