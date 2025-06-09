//Merge the arrays let array1 = [1, 2]; and let array2 = [3, 4]; into a new array.

function getConcat(array1, array2){
    let i = 0;
    newArray = [];
    while(i < array1.length){
        newArray.push(array1[i]);
        ++i;
    }

    i = 0;
    while(i < array2.length){
        newArray.push(array2[i]);
        ++i;
    }
    return newArray;
}

let array1 = ["Hello "];
let array2 = ["JS"];
let merge = getConcat(array1, array2);
console.log(merge);

// function by for

function getMerge(arrayOne, arrayTwo){
    generalArray = [];

    for(let i = 0; i < arrayOne.length; ++i){
        generalArray.push(arrayOne[i]);
    }
    for(let i = 0; i < arrayTwo.length; ++i){
        generalArray.push(arrayTwo[i]);
    }

    return generalArray;
}

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let concat = getMerge(arrayOne, arrayTwo);

console.log(concat);