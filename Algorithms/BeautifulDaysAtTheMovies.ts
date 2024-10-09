function beautifulDays(i: number, j: number, k: number): number {
  // Write your code here
  let beautifulDays: number = 0
  for (let x = i; x <= j; x++) {
    let reversedX: number = Number(String(x).split('').reverse().join(''))
    let isBeautifulDay: boolean = Number.isInteger(Math.abs(x - reversedX) / k)
    isBeautifulDay && beautifulDays++
  }
  return beautifulDays
}