function frequencySort(s) {
    // Create a frequency map to store character counts
    const charFrequency = new Map();
    
    // Count the frequency of each character in the string
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    
    // Sort characters based on frequency in descending order
    const sortedChars = [...charFrequency.keys()].sort((a, b) => charFrequency.get(b) - charFrequency.get(a));
    
    // Build the sorted string based on character frequency
    let sortedString = "";
    for (const char of sortedChars) {
        sortedString += char.repeat(charFrequency.get(char));
    }
    return sortedString;
}

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));