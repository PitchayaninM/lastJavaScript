let values1 =['Apple', 1, false];
let values2 =['Fries', 1, true, 'Mars'];
let values3 =['Mars', 9, 'Apple'];


for (let index = 0; index < values1.length; index++) {
    const v1 = values1[index];
    for (let index = 0; index < values2.length; index++) {
        const v2 = values2[index];
        if (v1 === v2) {
            console.log("values1 and values2 : " + v2 );
        }
    }
}

for (let index = 0; index < values1.length; index++) {
    const v1 = values1[index];
    for (let index = 0; index < values3.length; index++) {
        const v3 = values3[index];
        if (v1 === v3) {
            console.log("values1 and values3 : "+ v3 );
        }
    }
}

for (let index = 0; index < values2.length; index++) {
    const v2 = values2[index];
    for (let index = 0; index < values3.length; index++) {
        const v3 = values3[index];
        if (v2 === v3) {
            console.log("values2 and values3 : " + v3 );
        }
    }
}