function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  let result: number = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    let sum: number = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      result++;
    }
  }
  return result;
}