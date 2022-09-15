let a = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let b = [32, 30, 26, 28, 44]

let d = []
for (let i = 0; i < a.length; i++) {
  let c = {}
  c['name'] = a[i]
  c['age'] = b[i]
  d[i] = c
}
console.log(d)