function vowelIndices(word){
 let vowels = /[aeiouyAEIOUY]/g
 indices = []
  for(let i = 0; i<word.length; i++){
    if(word[i].match(vowels)!=null){
      indices.push(i+1)
    }
  }
  return indices
}