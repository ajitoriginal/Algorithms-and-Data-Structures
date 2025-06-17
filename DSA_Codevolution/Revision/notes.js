/*
An algorithm is a set of well-defined instructions to solve a particular problem
    Well defined inputs
    Each step should be clear
    Language independent

Why algorithms?
    Learn different techniques to efficiently solve problems
    One problem can be solved in many ways using different algorithms

Analysis of algorithm
    --To evaluate the performance of an algorithm in terms of its input size
    --Time Complexity: Amount of time taken by algorithm to run as a function of input size
    --Space Complexity: Amount of memory taken by algorithm to run as a function of input size
    --There is no one solution that works best every single time. It is good to know multiple ways
      to solve a problem.
Asymptotic Notations
    --Mathematical tools to represent time and space complexity
        --Big-O Notation : Worst case notation
        --Omega Notation : Best case notation
        --Theta Notation : Average case notation
    
    --Big-O Notation
        --describes the complexity of an algorithm using algebraic terms
        --represents worst case complexity of an algorithm
        --two important characteristics
            --expressed in terms of the input
            --focuses on bigger picture
        --Calculation of complexity
            --O(n) : Linear
            --O(1) : Constant
            --O(n^2) : Quadratic
            --O(n^3) : Cubic
            --O(logn) : Logarithmic

Objects and Arrays Big-O
    --An object is a collection of key value pairs
    insert/Remove/Access : O(1)
    Search/Object.keys()/Object.values()/Object.entries() : O(n)

    --An array is an ordered collection of values
    insert/remove at end : O(1)
    insert/remove at beginning : O(n)
    Access : O(1)
    Search : O(n)
    Push/pop : O(1)
    Shift/unshift/concat/slice/splice : O(n)
    forEach/map/filter/reduce : O(n)

Math algorithms
    Fibonacci sequence
    Factorial of a number
    Prime number
    Power of two
    Recursion
    Fibonacci sequence with recursion
    Factorial of a number with recursion

Recursion
    --a problem solving technique where the solution depends on solutions to smaller
      instances of the same problem
    --Recursion is when a function calls itself
    --useful when you want to solve a problem by breaking down it into smaller versions of
      same problem
    --It should always have a base case
    --It should always have a condition to terminate the recursion
*/