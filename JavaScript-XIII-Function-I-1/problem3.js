function isOdd(x){
if(x%2!=0){
  return true
}else{
  return false
}

}
let x = 50 ///input value   
for(let i=0;i<x;i++){
let s=isOdd(i)
if(s==true){
  console.log(i)
}
}