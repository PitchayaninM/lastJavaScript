function indexMultipiler(arr){
 let num = 0;

 for (let index = 0; index < arr.length; index++) {
   num += arr[index] * index;
 }
 return num;
}

console.log(indexMultipiler([1,2,3,4,5]));
console.log(indexMultipiler([-3,0,8,-6]));