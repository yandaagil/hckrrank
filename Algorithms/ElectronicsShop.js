function getMoneySpent(keyboards, drives, b) {
  /*
    * Write your code here.
    */
  let maxMoneySpent = -1
  keyboards.forEach(keeb => {
    drives.forEach(drive => {
      if (keeb + drive > maxMoneySpent && 
        keeb + drive <= b) {
        maxMoneySpent = keeb + drive
      }
    })
  })
  return maxMoneySpent
}