function binarySearch(arr, target) {
    let left_index = 0, right_index = arr.length - 1, mid_index;
    while(left_index <= right_index) {
        mid_index = Math.floor((left_index + right_index) / 2)
        if(target === arr[mid_index]) {
            return mid_index
        } else if (target > arr[mid_index]) {
            left_index = mid_index + 1
        } else {
            right_index = mid_index - 1
        }
    }
    return -1
}

console.log(binarySearch([-2,2,3,4,5], 5))