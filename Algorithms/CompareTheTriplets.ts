function compareTriplets(a: number[], b: number[]): number[] {
  const res: number[] = []
  let AlicePoints: number = 0
  let BobPoints: number = 0
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      AlicePoints++
    } else if (a[i] < b[i]) {
      BobPoints++
    } else {
      continue
    }
  }
  
  res.push(AlicePoints)
  res.push(BobPoints)
  return res
}