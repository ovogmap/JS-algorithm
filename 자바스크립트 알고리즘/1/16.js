function solution(str) {
  let answer = []
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    const n = answer.indexOf(arr[i])
    if (n < 0) answer.push(arr[i])
  }
  return answer.join('')
}

const str = 'ttkkiiuu'
console.log(solution(str))
