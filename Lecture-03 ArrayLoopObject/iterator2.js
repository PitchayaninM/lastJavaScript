let str = "Hello";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol. iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one 
}


let arr1 = [1, 3, 11, 32, 44, 99];
let arr2 = [4, 12, 15, 99];
let arr3 = [4, 11, 13, 15, 23, 43];

function searchThreeSameNum(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;

    while (1) {
        if (i == arr1.length || j == arr2.length) {
            return 'No equal numbers';
        }

        if (arr1[i] < arr2[j]) {
            i++;
            continue;
        } else if (arr1[i] > arr2[j]) {
            j++;
            continue;
        } else if (arr1[i] == arr2[j]) 
            for (let k = 0; k < arr3.length; k++) {
                if (arr1[i] == arr3[k]) 
                    return arr1[i];
            }   

        return 'No equal numbers';
    }
}