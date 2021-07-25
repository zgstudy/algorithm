function binarySearch(list, item) {
  var low = 0;
  var high = list.length - 1;
  while (low <= high) {
    var mid = Math.floor((high - low) / 2);
    var guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      low = mid + 1;
    } else if (guess > item) {
      high = guess - 1;
    }
  }
  return null;
}

var ls = [1, 3, 4, 5, 6, 8, 10, 12];
console.log(binarySearch(ls, 3));
