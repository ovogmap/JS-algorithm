function solution(str) {
  let answer = str.replace(/[^0-9]/g, '')
  answer = parseInt(answer, 10)
  return answer
}

const str = 'g0en2T0s8eSoft'
console.log(solution(str))
