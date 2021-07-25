def binarySearch(list, item):
    low = 0
    high = len(list) - 1
    while low <= high:
        mid = (high + low) // 2
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


ls = [1, 3, 4, 5, 6, 8, 10, 12]
print(binarySearch(ls, 8))
