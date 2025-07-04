function recursiveFactorial(n) {
    if(n <= 0) return 1
    return n * recursiveFactorial(n - 1)
}

// Big-O = O(n)


console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))