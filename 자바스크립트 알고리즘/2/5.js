// Array.from 배열을 생성하는 방법.

function solution(arr) {
  let answer = Array.from({ length: arr.length }, () => 1)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++
    }
  }

  return answer
}

const arr = [92, 92, 92, 100, 76]

console.log(solution(arr))
