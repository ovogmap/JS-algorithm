function solution(arr) {
  let answer = arr.reduce((newArr, curr) => {
    const res = newArr.indexOf(curr)
    if (res < 0) newArr.push(curr)
    return newArr
  }, [])
  return answer
}

const arr = ['good', 'time', 'good', 'time', 'student', 'student']
console.log(solution(arr))
