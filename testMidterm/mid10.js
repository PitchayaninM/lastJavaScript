function isValidIP(ip) {
    const parts = ip.split(".");
    
    if (parts.length !== 4) {
        return false;
    }

    for (const part of parts) {
        if (!/^\d+$/.test(part)) {
            return false;
        }

        const num = parseInt(part, 10);
        if (num < 0 || num > 255) {
            return false;
        }
    }
    return true;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));