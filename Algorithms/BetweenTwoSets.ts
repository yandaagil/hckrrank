function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  let totalFactors: number = 0
  for (let i = Math.max(...a); i <= Math.min(...b); i++) {
    if (a.every(e => i % e === 0)) {
      if (b.every(e => e % i === 0)) {
        totalFactors++
      }
    }
  }
  return totalFactors
}