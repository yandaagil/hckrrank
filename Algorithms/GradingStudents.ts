function gradingStudents(grades: number[]): number[] {
  // Write your code here
  return grades.map(grade => {
    if (grade < 38 || grade % 5 < 3) {
      return grade;
    } else {
      return grade + (5 - (grade % 5));
    }
  });
}