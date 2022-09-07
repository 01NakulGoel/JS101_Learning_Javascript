let str ='rAhul'
let lower = 'abcdefghijklmnopqrstuvwxyz'
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let low =[...lower]
// let up = [...upper]
let newStr=''
for (let i=0;i<str.length;i++){
for (let j=0; j<lower.length;j++){
  if(str[i]==lower[j])
  {newStr+=upper[j]
    
  }else if (str[i]==upper[j]){
    newStr+=upper[j]
  }

}}
  
console.log(newStr)
