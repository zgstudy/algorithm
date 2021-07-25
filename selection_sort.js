function findSmallest(arr) {
  var smallest = arr[0];
  var smallestIndex = 0;
  //   for (const val of arr) {
  //     if (val < smallest) {
  //       smallest = val;
  //       smallestIndex = arr.findIndex((v) => v === val);
  //     }
  //   }
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  var newArr = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var smallestIndex = findSmallest(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
