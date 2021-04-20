function getAverage(marks){
  let total = marks.reduce((a,b)=>a+b)
  return Math.floor(total/marks.length)
}