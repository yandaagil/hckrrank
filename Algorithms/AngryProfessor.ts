function angryProfessor(k: number, a: number[]): string {
  // Write your code here
  const onTimeStudents: number = a.filter(student => student <= 0).length
  if (onTimeStudents >= k) {
    return "NO"
  } else {
    return "YES"
  }
}