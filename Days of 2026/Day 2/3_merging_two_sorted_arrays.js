/**
 * 1. append: in same array: arr1 will be updated with (arr1+arr2)
 * 2. concat: In a 3rd array
 * 3. compare:
 * 4. copy: copy elements of array1 in array2
 */

/**
 * Merging: This can also happen in two sorted arrays.
 * Merge two sorted arrays and create a new sorted arrays.
 */

const mergeSortedArrays = (arr1, arr2) => {
    let i = 0, j = 0 , k = 0;
    let arr3 = [];

    let length = arr1.length > arr2.length ? arr2.length : arr1.length;
    for(; i < length, j < length; k++){
        if(arr1[i] < arr2[j]){
            arr3[k] = arr1[i];
            i++;
        } else{
            arr3[k] = arr2[j];
            j++;
        }
    }

    const longestArray = arr1.length > arr2.length ? arr1 : arr2;
    for(let m = length-1; m < longestArray.length; m++){
        arr3[k] = longestArray[m];
        k++
    }
    return arr3
};

const sortedArray1 = [3, 8, 16, 20, 25, 28, 30];
const sortedArray2 = [4, 10, 12, 22, 23];
console.log(mergeSortedArrays(sortedArray1, sortedArray2));
;