function char(x) {
  // i have used ASCII values to compare small alphabets
  flag = 'not Small char'
  for (let i = 97; i <= 122; i++) {
    if (x == String.fromCharCode(i)) {
      flag = 'small char'
      break
    }
  }
  console.log(flag)

}

char('z')