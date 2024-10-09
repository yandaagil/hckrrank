function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  const max: number = Math.max(...candles)
  return candles.filter(candle => candle === max).length
}