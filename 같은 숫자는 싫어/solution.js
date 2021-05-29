function solution(arr) {
  var answer = [];
  arr.forEach((v, i) => {
    if (v !== arr[i - 1]) {
      answer.push(v);
    }
  });
  return answer;
}
