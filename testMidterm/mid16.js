function longestValidParentheses(s) {
    const stack = []; // Stack to keep track of indices of opening parentheses
    let maxValidLength = 0; // Maximum valid length found so far
    
    // Initialize with an impossible starting index for the stack
    stack.push(-1);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push the index of an opening parenthesis onto the stack
        } else {
            stack.pop(); // Pop the last element if it's an opening parenthesis

            if (stack.length === 0) {
                // If the stack is empty, push the current index onto the stack
                stack.push(i);
            } else {
                // Calculate the length of the current valid substring
                maxValidLength = Math.max(maxValidLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxValidLength;
}

console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("()))))(()())(")); // Output: 6
