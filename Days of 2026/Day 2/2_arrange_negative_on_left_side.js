let arr = [-6, 3, -8, 10, 5, -7, -9, 12, -4, 2];

function swap(index1, index2, arr) {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}

function arrangeNegativeElementsOnLeftHandSide(arr){
    let i = 0 ; j = arr.length-1;
    while(i < j){
        while(arr[i] < 0){
            i++
        }
        while(arr[j] >= 0){
            j--;
        }
        if(i<j){
            swap(i, j, arr);
        }
    }
}

console.log('Original Array---', arr);
arrangeNegativeElementsOnLeftHandSide(arr);
console.log('Arranged Array---', arr);
