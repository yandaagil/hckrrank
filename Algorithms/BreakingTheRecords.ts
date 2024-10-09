function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let highest: number = scores[0]
  let lowest: number = scores[0]
  const recordBreaks: number[] = [0,0]
  
  scores.forEach(score => {
    if (score > highest) {
      highest = score
      recordBreaks[0]++
    } else if (score < lowest) {
      lowest = score
      recordBreaks[1]++
    }
  })
  
  return recordBreaks
}