function solution(answers) {
  var answer = []

  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  const counts = {}

  for (let i = 0; students.length > i; i++) {
    for (let j = 0; answers.length > j; j++) {
      if (students[i][j] === answers[j]) {
        if (!counts[i + 1]) {
          counts[i + 1] = 0
        }
        counts[i + 1]++
      }
    }
  }
  const result = Object.entries(counts)
  const res = result.sort((a, b) => {
    return b[1] - a[1]
  })

  res.forEach((item, i) => {
    if (res[0][1] === item[1]) {
      answer.push(parseInt(item[0], 10))
    }
  })
  return answer
}
