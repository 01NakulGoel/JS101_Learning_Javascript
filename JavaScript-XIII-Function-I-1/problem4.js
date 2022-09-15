function avg(x){
if(x.length==0){
  return 0
}
  else {
  let sum=0
  for(let i=0;i<x.length;i++){
      sum+=x[i]
  }
  return sum/x.length
  }
}


console.log(avg([]))
console.log(avg([1,5,7,9,3]))
