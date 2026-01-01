let arr = [4, 8, 13, 16, 20, 25, 28, 33];
let elementToInsert = 18;
function insertElementInSortedArray(arr, element){
    for(i = arr.length-1; i > 0; i--){
        if(arr[i] <= element){
            break;
        } 
        arr[i+1] = arr[i];
    }
    arr[i+1] = element;
    return arr;
}
console.log('Original Array---', arr);
const el = insertElementInSortedArray(arr, elementToInsert);
console.log('After inserted el--', el)