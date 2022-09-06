let arr = [ 1,2,4,5,7,9]
let count = 0
let sum = 0
for(let i =0;i<arr.length;i++){
if(arr[i]%2===0)
{sum = sum+ arr[i]
 count++}
  
  
}
console.log(sum/count)