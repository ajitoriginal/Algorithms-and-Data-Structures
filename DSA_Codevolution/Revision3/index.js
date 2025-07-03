function factorial(n) {
    let output = 1
    if(n < 2) {
        return output
    }
    for(let i = n; i > 1; i--) {
        output = output * i
    }
    return output
}
// Big-O = O(n)
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))


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