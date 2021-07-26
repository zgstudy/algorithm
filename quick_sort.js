function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var pivot = arr[0];
    var less = [];
    var greater = [];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
    return quickSort(less).concat([pivot]).concat(quickSort(greater));
  }
}

console.log(quickSort([10, 5, 2, 3, 6, 33, 23, 7]));
