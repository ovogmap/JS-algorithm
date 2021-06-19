// 매우 멍청한 생각..
// 문제의 핵심을 이해 못하고 풀어서 그런듯
// 문제를 좀 더 잘 읽어보고 이해하고 풀려고 해야할듯..
function solution(arr) {
  let answer = 0
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (arr[i - 1] === 1) {
        answer += count + 1
        count++
      } else {
        answer += 1
      }
    } else {
      count = 1
    }
  }
  return answer
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
console.log(solution(arr))

// function solution(arr) {
//   let answer = 0
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count++
//       answer += count
//     } else {
//       count = 0
//     }
//   }
//   return answer
// }

// const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
// console.log(solution(arr))
