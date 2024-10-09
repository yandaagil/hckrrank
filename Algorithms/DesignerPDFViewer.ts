function designerPdfViewer(h: number[], word: string): number {
  // Write your code here
  let letterHeights: number[] = [];
  for (let i = 0; i < word.length; i++) {
    let index: number = word.charCodeAt(i) - 97;
    letterHeights.push(h[index]);
  }
  const tallestLetter: number = Math.max(...letterHeights);
  const selectionArea: number = tallestLetter * word.length
  return selectionArea
}