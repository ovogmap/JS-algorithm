function solution(arr) {
  let answer = [0, Number.MAX_SAFE_INTEGER]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      answer[0] += arr[i]
      if (arr[i] < answer[1]) answer[1] = arr[i]
    }
  }
  return answer
}

const arr = [2, 3, 4, 12, 1, 54, 5, 65, 62, 34]
console.log(solution(arr))
