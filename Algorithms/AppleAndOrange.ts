function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  // Write your code here
  let totalAppleFall: number = 0
  let totalOrangeFall: number = 0

  apples.forEach((apple) => {
    let distance: number = a + apple
    if (distance >= s && distance <= t) totalAppleFall++
  })

  oranges.forEach((orange) => {
    let distance: number = b + orange
    if (distance >= s && distance <= t) totalOrangeFall++
  })

  console.log(totalAppleFall)
  console.log(totalOrangeFall)
}