function plusMinus(arr: number[]): void {
  // Write your code here
  let positives: number = 0
  let negatives: number = 0
  let zeros: number = 0
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      positives++
    } else if (arr[i] < 0) {
      negatives++
    } else {
      zeros++
    }
  }
  
  const positiveRatio: string = (positives / arr.length).toFixed(6)
  const negativeRatio: string = (negatives / arr.length).toFixed(6)
  const zeroRatio: string = (zeros / arr.length).toFixed(6)
  
  console.log(`${positiveRatio}\n${negativeRatio}\n${zeroRatio}`)
}
