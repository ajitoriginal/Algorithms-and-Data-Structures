const factorial = (n) => {
    let output = 1
    for(let i = 2; i <=n; i++) {
        output = output*i
    }
    return output
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))