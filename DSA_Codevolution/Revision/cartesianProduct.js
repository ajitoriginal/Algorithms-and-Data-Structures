function cartesianProduct(arrOne, arrTwo) {
    const output = []
    for(let i = 0; i < arrOne.length; i++) {
        for(let j = 0; j < arrTwo.length; j++) {
            output.push([arrOne[i], arrTwo[j]])
        }
    }
    return output
}

// Big-O = O(nm)

console.log(cartesianProduct([1,2], [3,4,5]))