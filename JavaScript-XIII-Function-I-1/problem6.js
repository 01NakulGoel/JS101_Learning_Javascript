function low(aa){
  for(let i=65;i<=90;i++){
if(aa==String.fromCharCode(i)){
  return String.fromCharCode(i+32)
}
}
}
function upp(aa){  
  for(let i=97;i<=122;i++){
if(aa==String.fromCharCode(i)){
  return String.fromCharCode(i-32)
}
}
}
// console.log(upp('a'))

// let input ='TaaTest'

function lowupp(input){
let out=''
for(let i=0;i<input.length;i++){
if(input[i]!=low(input[i]) && low(input[i])!= undefined)
{
  out+= low(input[i] )
}
   else{
     out+=upp(input[i])
   }

}
return out}
console.log(lowupp('TesT'))

