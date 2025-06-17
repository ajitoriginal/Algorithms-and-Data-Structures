function binarySearch(arr, target) {
    if(arr.length) {
        let left_index = 0
        let right_index = arr.length - 1
        let mid_index;
        while(left_index <= right_index) {
            mid_index = Math.floor((left_index+right_index)/2)
            // console.log(target, arr[mid_index])
            if(target < arr[mid_index]) {
                right_index = mid_index - 1
            } else if(target > arr[mid_index]) {
                left_index = mid_index + 1
            } else {
                return mid_index
            }
        }
    }
    return -1
}

// Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))

