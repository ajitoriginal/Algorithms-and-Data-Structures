function fibonacciRecursive(n) {
    if(n < 2) return n
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}


console.log(fibonacciRecursive(0))
console.log(fibonacciRecursive(1))
console.log(fibonacciRecursive(2))
console.log(fibonacciRecursive(3))
console.log(fibonacciRecursive(4))
console.log(fibonacciRecursive(5))
console.log(fibonacciRecursive(6))