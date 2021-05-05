function openOrSenior(data){
 	return data.map(list=>{
 		return (list[0]>=55&& list[1]>7)? list="Senior"
 		:  list="Open"
 	})

 	}

console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))
