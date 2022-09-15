let a = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
]



for (let i = 0; i < a.length; i++) {
  let sum = []

  for (let j = 0; j < a[i].students.length; j++) {
    let abc = 0
    for (let k = 0; k < a[i].students[j].marks.length; k++) {
      abc += a[i].students[j].marks[k]
    }
    sum[j] = abc
  }
  let max = sum[0]
  let ind = 0
  for (let l = 0; l < sum.length; l++) {
    if (max < sum[l]) {
      max = sum[l]
      ind = l
    }
   
  }
   
  console.log(`${a[i].grade}-${a[i].students[Number(ind)].name}-${max}`)



}