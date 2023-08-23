function bomb(message) {
    if (message.includes("bomb")) {
        return "Duck!!!";
    } else if (message.includes("boom")) {
        return "There is no bomb, relax.";
    } else {
        return "There is no bomb, relax.";
    }
}

console.log(bomb("There is a bomb.")); // Output: "Duck!!!"
console.log(bomb("Hey, did you think there is a bomb?")); // Output: "Duck!!!"
console.log(bomb("This goes boom!!!")); // Output: "There is no bomb, relax."
