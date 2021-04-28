string = '\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'

count = 0
string.split("").forEach(item=>{
	if (item =="\n") count+=1})

console.log((count-2)**2/2)