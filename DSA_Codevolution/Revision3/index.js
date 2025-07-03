function factorialRecursive(n) {
    if(n <= 1) {
        return 1
    }
    return n * factorialRecursive(n-1)
}
// Big-O = O(n)
console.log(factorialRecursive(0))
console.log(factorialRecursive(1))
console.log(factorialRecursive(2))
console.log(factorialRecursive(3))
console.log(factorialRecursive(4))
console.log(factorialRecursive(5))
console.log(factorialRecursive(6))
//------------------------------
// function fibonacciRecursive(n) {
//     if(n < 2) {
//         return n
//     }
//     return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
// }
// // Big-O = O(2^n)
// console.log(fibonacciRecursive(0))
// console.log(fibonacciRecursive(1))
// console.log(fibonacciRecursive(2))
// console.log(fibonacciRecursive(3))
// console.log(fibonacciRecursive(4))
// console.log(fibonacciRecursive(5))
// console.log(fibonacciRecursive(6))
//------------------------------
// function isPowerOfTwo(number) {
//     if(number < 1) {
//         return false
//     }
//     while (number > 1) {
//         if(number % 2 !== 0) {
//             return false
//         }
//         number = number / 2
//     }
//     return true
// }
// // Big-O = O(logn)
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))
//------------------------------
// function isPrime(number) {
//     let output = true
//     if(number < 2) {
//         return false
//     }
//     for(let i = 2; i < number; i++) {
//         if(number % i === 0) {
//             output = false
//         }
//     }
//     return output
// }
// // Big-O = O(n)
// console.log(isPrime(0))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))

//------------------------------
// function factorial(n) {
//     let output = 1
//     if(n < 2) {
//         return output
//     }
//     for(let i = n; i > 1; i--) {
//         output = output * i
//     }
//     return output
// }
// // Big-O = O(n)
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

//------------------------------
// function fibonacci(n) {
//     if(n < 1) {
//         return null
//     }
//     if(n === 1) {
//         return [0]
//     }
//     const output = [0,1]
//     for(let i = 2; i < n; i++) {
//         output[i] = output[i-1] + output[i-2]
//     }
//     return output
// }
// // Big-O = O(n)
// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
//------------------------------