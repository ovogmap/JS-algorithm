function solution(str) {
  let answer = 'YES'
  const s = str.toLowerCase().replace(/[^a-z]/g, '')
  if (s.split('').reverse().join('') !== s) answer = 'NO'
  return answer
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(str))
