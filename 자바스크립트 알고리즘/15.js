function solution(str) {
  let answer

  if (str.length % 2 === 0) {
    const i = str.length / 2
    answer = str[i - 1] + str[i]
  } else {
    const i = (str.length - 1) / 2
    answer = str[i]
  }

  return answer
}

console.log(solution('tes'))
