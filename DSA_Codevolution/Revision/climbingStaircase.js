// function climbingStaircase(n) {
//     if(n <= 1) return 1
//     return climbingStaircase(n-1) + climbingStaircase(n-2)
// }

// Big-O = O(2^n)

function climbingStaircase(n) {
    const noOfWays = [1,2]
    for(let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
    }
    return noOfWays[n-1]
}

// Big-O = O(n)


console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))