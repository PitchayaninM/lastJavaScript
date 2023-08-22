function totalVolume(...numbers) {
    let total = 0;

    for (const num of numbers) {
        const [length, width, height] = num;
        const volume = length * width * height;
        total += volume;
    }
    return total;
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));