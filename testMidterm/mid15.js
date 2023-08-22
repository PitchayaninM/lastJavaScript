function jumpingFrog(jumpLimit, stones) {
    const n = stones.length;

    // Initialize an array to store the minimum jumps needed to reach each stone.
    const dp = Array(n).fill(Infinity);
    dp[0] = 1; // The frog starts at the first stone.

    for (let i = 1; i < n; i++) {
        for (let j = Math.max(0, i - jumpLimit); j < i; j++) {
            if (Math.abs(stones[i] - stones[j]) <= jumpLimit) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    // Check if it's possible to reach the far bank.
    for (let i = Math.max(0, n - jumpLimit); i < n; i++) {
        if (stones[i] === 0) {
            return "no chance :-(";
        }
    }

    // Return the minimum number of jumps to cross the river.
    return dp[n - 1];
}

console.log(jumpingFrog(5, [1, 1, 1, 1, 1]));
console.log(jumpingFrog(5, [1, 3, 1, 1, 1]));
console.log(jumpingFrog(5, [1, 1, 0, 1, 1]));
