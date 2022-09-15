function prime(num) {
  
  for(let j=2;j<=num;j++){
  let count=0
      for (let i = 2; i <j; i++) {
    
         if (j % i == 0) {
         count++
     break
    }
  }
  if(count==1){
    console.log(j)
  }
  }
  
}
prime(13)