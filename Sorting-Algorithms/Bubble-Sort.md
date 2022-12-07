# Bubble Sort (Сортировка пузырьком)

## Time complexity — O(N^2). &#129301;

### Описание:
Алгоритм сортировки пузырьком сравнивает два соседних значения и меняет их местами, если первое значение больше второго. Значения как бы всплывают подобно пузырькам воздуха в воде, выстраиваясь в восходящем порядке.

![Alt Text](https://techrocks.ru/wp-content/uploads/2020/08/ubhywp9xh8zk6on4caql.gif)

### Code time:
```
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
      let isSwap = false;
      for (let k = 0; k < (arr.length - i - 1); k += 1) { 
          if(arr[k] > arr[k + 1]) {
              let temp = arr[k];  
              arr[k] = arr[k + 1]; 
              arr[k + 1] = temp; 
              isSwap = true;
          }
      }
      if (!isSwap) {
        break;
      }
  }

  return arr;
}
```
