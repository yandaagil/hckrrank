function hurdleRace(k: number, height: number[]): number {
  // Write your code here
  let potionDoses: number = 0
  const tallestHurdle: number = Math.max(...height)
  if (tallestHurdle - k > 0) {
    potionDoses = tallestHurdle - k
  }
  return potionDoses
}