function solution(str) {
  let answer = 'YES'
  const copy = str.split('').reverse().join('')
  if (str.toUpperCase() !== copy.toUpperCase()) {
    answer = 'NO'
  }
  return answer
}

const str = 'gooGg'
console.log(solution(str))
