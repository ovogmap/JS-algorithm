function solution(str, a) {
  let answer = 0
  for (let x of str) {
    if (x === a) answer++
  }
  return answer
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))
