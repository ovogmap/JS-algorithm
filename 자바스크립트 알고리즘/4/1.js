function solution(arr) {
  let anwser
  let max = Number.MIN_SAFE_INTEGER

  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((total, n) => total + parseInt(n, 10), 0)

    if (sum > max) {
      max = sum
      anwser = x
    } else if (sum === max) {
      if (x > anwser) anwser = x
    }
  }

  return anwser
}

const arr = [128, 460, 603, 40, 521, 137, 123]

console.log(solution(arr))
