// function solution(str, t) {
//   let answer = []
//   const arr = str.split('')

//   for (let i = 0; i < arr.length; i++) {
//     let one = 0
//     let two = 0

//     for (let j = i; j > -1; j--) {
//       if (arr[j] === t) break
//       ++one
//     }

//     for (let k = i; k < arr.length; k++) {
//       if (arr[k] === t) break
//       ++two
//     }

//     const ss = Math.min(one, two)
//     answer.push(ss)

//     one = 0
//     two = 0
//   }

//   return answer
// }

function solution(str, t) {
  let answer = []
  let p = 1000

  for (let x of str) {
    if (x === t) {
      p = 0
      answer.push(p)
    } else {
      p++
      answer.push(p)
    }
  }
  p = 1000
  console.log(answer)
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      p = 0
    } else {
      p++
      answer[i] = Math.min(answer[i], p)
    }
    console.log(i)
  }

  return answer
}

const str = 'teachermode'
const t = 'e'

console.log(solution(str, t))
