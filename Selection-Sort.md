# Selection sort (Сортировка выбором)

## Time complexity — O(N^2). &#129301;

### Описание:
Находим минимальное значение в структуре данных и помещаем его на первую позицию, затем находим второе минимальное значение и помещаем его на вторую позицию и так далее.  

![Alt Text](https://techrocks.ru/wp-content/uploads/2020/08/mbzjewb2l897eiidkr14.gif)

### Code time:
```
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let minIndex = i;
    for (let k = i + 1; k < arr.length; k += 1) {
      if (arr[k] < arr[minIndex]) {
        minIndex = k;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}
```
