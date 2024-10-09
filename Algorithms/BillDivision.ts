function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  const actualBill: number = (bill.reduce((total, current) => total + current) - bill[k]) / 2
  if (b === actualBill) {
    console.log("Bon Appetit")
  } else {
    console.log(b - actualBill)
  }
}