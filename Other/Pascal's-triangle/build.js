const generate = (level = 0) => {
    const triangle = [
      [1],
    ];
  
    for (let i = 0; i < level; i += 1) {
      triangle[i + 1] = [];
      for (let k = 0; k < triangle[i].length + 1; k += 1) {
        triangle[i + 1].push((triangle[i][k - 1] ?? 0) + (triangle[i][k] ?? 0))
      }
    }
  
    return triangle;
};