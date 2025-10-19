const number = 24

// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  if (n % 15 === 0) {
    console.log(n + "FizzBuzz")
  } else if (n % 3 === 0) {
    console.log(n + "Fizz")
  } else if (n % 5 === 0) {
    console.log(n + "Buzz")
  } else {
    console.log(n)
  }
}
