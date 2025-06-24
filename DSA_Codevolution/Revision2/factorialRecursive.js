function factorialRecursive(n) {
    if(n <= 0) return 1
    return n * factorialRecursive(n-1)
}

console.log(factorialRecursive(0))
console.log(factorialRecursive(1))
console.log(factorialRecursive(2))
console.log(factorialRecursive(3))
console.log(factorialRecursive(4))
console.log(factorialRecursive(5))
console.log(factorialRecursive(6))
