function numberSplit(number){
    const a = " , ";
    return Math.floor(number/2) + a + Math.ceil(number/2);
} 
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));