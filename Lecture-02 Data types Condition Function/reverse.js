function reverseString(value) {
    let reversedValue = "";
    value.split("").forEach((char) => {
        reversedValue = char + reversedValue; 4
    }); 
    
    return reversedValue; 
}
    console.log(reverseString("Reverse Me"));