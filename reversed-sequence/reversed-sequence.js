const reverseSeq = n => {
  array = []
  if (n>0){
   for (let i=1; i<n+1; i++){
     array.push(i)
   }
  }
  return array.reverse()
};



//or 

const reverseSeq2 = n => {
  array = []
  if (n>0){
   for (let i=n; i>0; i--){
     array.push(i)
   }
  }
  return array
};

console.log(reverseSeq2(5))