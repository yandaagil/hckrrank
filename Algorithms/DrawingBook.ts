function pageCount(n: number, p: number): number {
  // Write your code here
  if (p <= Math.floor(n / 2)) {
    return Math.floor(p / 2)
  } else {
    return n % 2 === 0
    ? Math.floor((n - p + 1) / 2)
    : Math.floor((n - p) / 2)
  }
  
  const totalTurns = Math.floor(n / 2);
  const targetTurns = Math.floor(p / 2);
  return Math.min(targetTurns, totalTurns - targetTurns);
}