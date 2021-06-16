function solution(str) {
  let answer = []
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    const n = answer.indexOf(arr[i])
    console.log(n)
    if (n < 0) answer.push(arr[i])
  }
  return answer.join('')
}

const str = 'ksekkset'
console.log(solution(str))
