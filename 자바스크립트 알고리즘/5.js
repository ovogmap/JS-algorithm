function solution(n) {
  let answer = Math.min(...n)
  // let min = Number.MAX_SAFE_INTEGER
  // for (let i = 0; i < n.length; i++) {
  //   if (n[i] < min) min = n[i]
  // }
  // answer = min
  return answer
}

console.log(solution([2, 11, 23, 45, 34, 1234, 654]))
