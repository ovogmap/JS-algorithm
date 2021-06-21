function solution(arr) {
  let answer = 0

  const dx = [-1, 0, 1, 0]
  const dy = [0, 1, 0, -1]

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = 1
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]
        let ny = j + dy[k]
        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr.length &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0
          break
        }
      }
      if (flag) answer++
    }
  }
  return answer
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]
console.log(solution(arr))
// 무적권 조건문 돌려서 답을 찾으려고 하는 멍청한 행동을 함
// ㅠㅠㅠ

// function solution(arr) {
//   let answer = 0

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log('answer', answer)
//       if (arr[i][j] > arr[i][j - 1] || j === undefined) {
//         if (arr[i][j] > arr[i][j + 1] || j === undefined) {
//           if (arr[i][j] > arr[i - 1][j] || i === undefined) {
//             if (arr[i][j] > arr[i + 1][j] || i === undefined) {
//               answer++
//               console.log(arr[i][j])
//             }
//           }
//         }
//       }
//     }
//   }
//   return answer
// }

// const arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ]
// console.log(solution(arr))
