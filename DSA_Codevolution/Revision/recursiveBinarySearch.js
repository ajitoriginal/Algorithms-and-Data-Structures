function recursiveBinarySearch(arr, target) {
    function search(arr, target, left_index, right_index) {
        if(left_index > right_index) return -1
        let mid_index = Math.floor((left_index + right_index) / 2)
        if(target < arr[mid_index]) {
            return search(arr, target, left_index, mid_index + 1)
        } else if(target > arr[mid_index]) {
            return search(arr, target, mid_index + 1, right_index)
        } else {
            return mid_index
        }
    }
    return search(arr, target, 0, arr.length - 1)
}

// Big-O = O(logn)


console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))