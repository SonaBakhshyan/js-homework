// Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.

function binarySearch(target, generalArray){
    let low = 0;
    let high = generalArray.length - 1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(generalArray[mid] === target){
            return mid;
        } else if(generalArray[mid] < target){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(9, [3, 6, 9, 12]));