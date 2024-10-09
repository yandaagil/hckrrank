function timeConversion(s: string): string {
  // Write your code here
  const time: string = s.slice(0, -2)
  const modifier: string = s.slice(-2)
  let [hours, minutes, seconds]: string[] = time.split(':');
  if (modifier === 'PM' && hours !== '12') {
    hours = String(Number(hours) + 12);
  } else if (modifier === 'AM' && hours === '12') {
    hours = '00';
  }

  return `${hours}:${minutes}:${seconds}`;
}