function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let leftRightDiagonalSum: number = 0
  let rightLeftDiagonalSum: number = 0

  for (let i = 0; i < arr.length; i++) {
    leftRightDiagonalSum += arr[i][i]
    rightLeftDiagonalSum += arr[i][(arr.length - 1) - i]
  }
  
  const res: number = leftRightDiagonalSum - rightLeftDiagonalSum
  return Math.abs(res)
}