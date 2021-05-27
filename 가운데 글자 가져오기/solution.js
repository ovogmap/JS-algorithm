function solution(s) {
  var answer = "";
  // const len = s.length
  const n = Math.floor(s.length / 2);
  answer = s.length % 2 === 0 ? s[n - 1] + s[n] : s[n];
  return answer;
}
