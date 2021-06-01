function solution(n) {
  var answer = ''
  const test = []
  if (n % 2 === 0) {
    const num = n / 2
    let i = 0
    while (i < num) {
      test.push('수박')
      i++
    }
  } else {
    const num = (n - 1) / 2
    let i = 0
    while (i < num) {
      test.push('수박')
      i++
    }
    test.push('수')
  }
  answer = test.join('')
  return answer
}
