# Binary Search

![Binary Search example](https://www.codesdope.com/staticroot/images/algorithm/binary_search.gif)


## Function

```js
const binarySearch = (arr, findNum) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.ceil((low + high) / 2);
    const guess = arr[mid];

    if (guess === findNum) {
      return `index is ${mid}`;
    }

    if (guess > findNum) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};
```

## Examples

```js
const testArr = Array.from({ length: 100 }).map((_x, i) => i + 1); // [1, 2, 3, 4, 5, 6, ..., 100];

binarySearch(testArr, 7) // index is 6
binarySearch(testArr, 101) // null
```
