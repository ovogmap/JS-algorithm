function solution(n) {
  var answer = 0;

  const res = n.toString(3).split("").reverse().join("");
  answer = parseInt(res, 3);
  return answer;
}
