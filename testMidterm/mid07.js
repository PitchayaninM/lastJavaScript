function sumTwoSmallestNums(numbers) {
    // Ensure the input is an array with at least two elements
    if (!Array.isArray(numbers) || numbers.length < 2) {
        return "Invalid input";
    }
    
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
    
    // Sum the first two elements (smallest numbers)
    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNums([2, 9, 6, -11]));
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));