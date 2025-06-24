function isPowerOfTwo(n) {
    if(n < 1) return false
    while(n > 1) {
        if(n%2 == 0) {
            n = n/2
        } else {
            return false
        }
    }
    return true
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(1))