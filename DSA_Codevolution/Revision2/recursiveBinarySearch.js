function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, righIndex) {
    if(leftIndex > righIndex) return -1
    let midIndex = Math.floor((leftIndex + righIndex) / 2)
    if(target === arr[midIndex]) {
        return midIndex
    } else if(target < arr[midIndex] ) {
        return search(arr, target, leftIndex, midIndex - 1)
    } else {
        return search(arr, target, midIndex + 1, righIndex)
    }
}

console.log(recursiveBinarySearch([-2,2,3,4,5], 30))