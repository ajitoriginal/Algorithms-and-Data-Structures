function quickSort(arr) {
    if(arr.length < 2) return arr
    let pivot = arr[arr.length - 1]; left = []; right = []
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// Big-O = O(n^2)

console.log(quickSort([8,20,-2,4,-6]))