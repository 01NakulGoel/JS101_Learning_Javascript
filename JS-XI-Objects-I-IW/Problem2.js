let a = 'Nakuregrrrrrrrreerfezfvfzal'
let obj={}

for(let i=0;i<a.length;i++){
 obj[a[i]]=0
  }
for(let j in obj){

  for(let i=0;i<a.length;i++){
  if(j==a[i]){
    obj[j]=obj[j]+1
  
  }
}}
for(let j in obj){
console.log(j+'-'+obj[j])}

// let a='nakaka'
// let lowe='abcdefghijklmnopqrstuvwxyz'
// for(let i=0;i<lowe.length;i++){
//   let count =0
// for(let j=0;j<a.length;j++){

//   if(lowe[i]==a[j]){
//   count++

// }
  
// }if (count>=1){
// console.log(`${lowe[i]} are ${count}`)}
  
// }