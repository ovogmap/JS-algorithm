function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((v, i) => v % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
