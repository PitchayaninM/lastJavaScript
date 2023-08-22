function simplePair(numbers, targetSum) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] * numbers[j] === targetSum) {
                return [numbers[i], numbers[j]];
            }
        }
    }
    return null; // Return null if no pair is found
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));