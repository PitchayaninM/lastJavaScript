function countPosSumNeg(arr) {
    let positiveCount = 0;
    let negativeSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positiveCount++;
      } else if (arr[i] < 0) {
        negativeSum += arr[i];
      }
    }
  
    console.log(`There are a total of ${positiveCount} positive numbers.`);
    console.log(`The sum of all negative numbers equals ${negativeSum}.`);
  }
  
  console.log(countPosSumNeg([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]));
  console.log(countPosSumNeg([92,6,73,-77,81,-90,99,8,-85,34]));
  console.log(countPosSumNeg([91,-4,80,-73,-28]));
  console.log(countPosSumNeg([]));  