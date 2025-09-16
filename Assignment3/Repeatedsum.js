function digitSum(num) {
  while (num > 9) {
    num = num.toString().split("").reduce((a,b) => a + +b, 0);
  }
  return num;
}

console.log(digitSum(456)); 