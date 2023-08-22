function highestDigit(number){
    if(number == 0){ 
        return 0;
       }
   else{
     return Math.max(number%10, highestDigit(Math.floor(number/10)));
   }
 }

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));