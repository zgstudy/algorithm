# 找出数组中最小数
def findSmallest(arr):
    smallest = arr[0]
    smallestIndex = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallestIndex = i
    return smallestIndex

# 选择排序
def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        # 找出数组中最小数，并加入到新数组中
        smallestIndex = findSmallest(arr)
        newArr.append(arr.pop(smallestIndex))
    return newArr


print(selectionSort([5, 3, 6, 2, 10]))
