function utopianTree(n: number): number {
  // Write your code here
  let treeHeight: number = 1;
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (treeHeight = treeHeight * 2) : treeHeight++;
  }
  return treeHeight;
}