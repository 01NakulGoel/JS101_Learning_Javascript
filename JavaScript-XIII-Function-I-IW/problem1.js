function prime(num) {
  let flag = 'prime'
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = 'notPrime'
      break;
    }
  }
  console.log(flag)
}
prime(13)
prime(10)