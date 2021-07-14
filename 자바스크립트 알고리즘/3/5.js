function solution(s) {
  let answer = ''
  let n = 1

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      n++
    } else {
      answer += s[i]
      if (n > 1) answer += n.toString()
      n = 1
    }
  }
  return answer
}

const s = 'KKHSSSSSSSE'

console.log(solution(s))
