function migratoryBirds(arr: number[]): number {
  // Write your code here
  let mostSightedBird: number[] = [0, 0] // [birdType, totalBird]
  for (let i = 1; i <= 5; i++) {
    let count: number = arr.filter(bird => bird === i).length
    if (count > mostSightedBird[1]) {
      mostSightedBird[0] = i
      mostSightedBird[1] = count
    }
  }
  return mostSightedBird[0]
}