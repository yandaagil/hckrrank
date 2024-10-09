function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let totalPairs: number = 0
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        totalPairs++
      }
    }
  }
  
  return totalPairs
}