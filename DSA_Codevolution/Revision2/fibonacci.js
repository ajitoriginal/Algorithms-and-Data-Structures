const fibonacci = (n) => {
    if(n == 1) {
        return [0]
    }
    const output = [0,1]
    for(let i = 2; i < n; i++) {
        output[i] = output[i-1] + output[i-2]
    }

    return output
}


console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))