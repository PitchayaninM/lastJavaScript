function removeDups(arr) {
    // Create an empty object to track unique elements
    let uniqueElements = {};

    // Filter out duplicates and store unique elements in the object
    let result = arr.filter(function(item) {
        if (!uniqueElements[item]) {
            uniqueElements[item] = true;
            return true;
        }
        return false;
    });
    return result;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));