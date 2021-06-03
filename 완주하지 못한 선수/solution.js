function solution(participant, completion) {
  var answer = ''
  const newList = participant.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1
    return acc
  }, {})

  completion.forEach((v) => {
    if (newList[v]) {
      newList[v] -= 1
    }
  })

  for (let i in newList) {
    if (newList[i] > 0) {
      answer = i
    }
  }

  return answer
}
