const getPositions = s => {
	return [(s%3), Math.floor(s/3)%3, Math.floor(s/9)%3]

}

let i = 0

while (i<20){
	console.log(i + " " +getPositions(i))
	i++
}