const getLine = (level = 0) => {
  const triangle = [1];

  const currentLineSize = level + 1;

  for (let i = 1; i < currentLineSize; i += 1) {
    triangle[i] = (triangle[i - 1] * (level - i + 1)) / i;
  }

  return triangle;
};