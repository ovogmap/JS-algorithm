function solution(strings, n) {
  var answer = [];
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}
