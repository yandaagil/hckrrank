function pickingNumbers(a: number[]): number {
  // Write your code here
  let longest: number = 0
  for (let i = 0; i < a.length; i++) {
    let first: number = a.filter(e => e === a[i]).length
    let second: number = a.filter(e => a[i] + 1 === e).length
    if (first + second > longest) {
      longest = first + second
    }
  }
  return longest
}