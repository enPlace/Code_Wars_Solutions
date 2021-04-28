function gridMap(fn,a) {
  let newList =[]
   a.forEach(list=>{
    newList.push(list.map(fn))
  });
 return newList
}