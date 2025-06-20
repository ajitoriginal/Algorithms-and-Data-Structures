function isPrime(n) {
    if(n < 2) {
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%2 === 0) {
            return false
        }
    }
    return true
}

// Big-O = O(sqrt(n))

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))