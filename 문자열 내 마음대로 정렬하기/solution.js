function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    const com = commands[i];
    const test = [];
    for (let j = 0; j < array.length; j++) {
      const num = j + 1;
      if (num >= com[0] && num <= com[1]) {
        test.push(array[j]);
      }
    }
    const result = test.sort((a, b) => a - b)[com[2] - 1];
    answer.push(result);
  }
  return answer;
}
