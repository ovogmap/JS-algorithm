// 내일 풀어볼것
function solution(nums) {
  let answer
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i]
      .toString()
      .split('')
      .reduce((a, c) => a + parseInt(c, 10), 0)

    if (n > max) {
      answer = nums[i]
      max = n
    } else if (n === max) {
      if (answer < nums[i]) answer = nums[i]
    }
  }
  return answer
}

const numbers = [128, 460, 603, 40, 521, 137, 123]

console.log(solution(numbers))
