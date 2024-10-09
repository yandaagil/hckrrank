function miniMaxSum(arr: number[]): void {
  // Write your code here
  const totalSum: number = arr.reduce((total, curr) => total + curr, 0);
  const max: number = Math.max(...arr);
  const min: number = Math.min(...arr);
  
  const minimumSum: number = totalSum - max;
  const maximumSum: number = totalSum - min;
  
  console.log(minimumSum, maximumSum);
}