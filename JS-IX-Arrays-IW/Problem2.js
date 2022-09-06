let input = ['b', 'a']
let small = 'abcdefghijklmnopqrstuvwxyz'
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let smallCase = [...small]
let upperCase = [...upper]
for (let i = 0; i < upperCase.length; i++) {
  for (let j = 0; j < upperCase.length; j++) {
    if (input[i] === smallCase[j]) {
      input[i] = upperCase[j]
    }
  }
}
console.log(input)


// let a = 'rahul'
// console.log(a.toUpperCase())
