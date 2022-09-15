function small(x) {
  // i am using ASCII values 
  for (let i = 65; i <= 90; i++) {
    if (x == String.fromCharCode(i)) {
      return String.fromCharCode(i + 32)
    }
  }
  return x
}
// console.log(small('B'))
// let worda = 'adbhsjjbSJNAJSKNIFDA'

function lowStr(word) {
  let bag = ''
  for (let i = 0; i < word.length; i++) {
    bag += small(word[i])
  }
  return bag
}
// console.log(lowStr(worda))
let arr = ["MA", "SA", "I", "SCH", "OOL"]
let newArr = []

for (let i = 0; i < arr.length; i++) {
   newArr[i] = lowStr(arr[i]) }
console.log(newArr)







