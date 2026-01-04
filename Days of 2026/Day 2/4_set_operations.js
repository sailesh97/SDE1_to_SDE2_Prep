/**
 * 1. Union: The union of two arrays can be defined as the common and distinct elements in the two arrays.
 * 2. Intersection
 * 3. Difference
 * 4. Set Memberships
 */

/**
 * 
 * @param {*} nums1 : One sorted array of length m
 * @param {*} nums2 : Another sorted array of length n
 * @returns Sorted array of union of nums1 & nums2
 */
/* function unionOfSortedArray(nums1, nums2) {
  let i = 0,
    j = 0,
    k = 0,
    nums3 = [];
  let length = nums1.length < nums2.length ? nums1.length : nums2.length;
  for (; i < length, j < length; i++, j++) {
    if (nums1[i] == nums2[j]) {
      nums3[k] = nums1[i];
    } else {
      let lesserElement = nums1[i] < nums2[j] ? nums1[i] : nums2[j];
      let greaterElement = nums1[i] > nums2[j] ? nums1[i] : nums2[j];
      nums3[k] = lesserElement;
      nums3[k + 1] = greaterElement;
    }
    k++;
  }

  let longestArray = nums1.length > nums2.length ? nums1 : nums2;
  for (let m = length; m < longestArray.length; m++) {
    nums3[k] = longestArray[m];
  }
  return nums3;
} */

function unionOfSortedArray(nums1, nums2) {
    let i = 0, j = 0, k = 0, nums3 = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] == nums2[j]){
            if(k == 0 || nums3[k-1] != nums1[i]){
                nums3[k] = nums1[i];
                k++
            }
            i++; j++;
        }
        else if(nums1[i] < nums2[j]){
            if(k == 0 || nums3[k-1] != nums1[i]){
                nums3[k] = nums1[i];
                k++;
            }
            i++; 
        } else{
            if(k == 0 || nums3[k-1] != nums2[j]){
                nums3[k] = nums2[j];
                k++;
            }
            j++; 
        }
    }

    let notExhaustedArray = (i == nums1.length) ? nums2 : nums1;
    notExhaustedArray = notExhaustedArray.slice(j, notExhaustedArray.length);

    for(let m = 0; m < notExhaustedArray.length; m++){
        if(nums3.length == 0 || nums3[k-1] != notExhaustedArray[m]){
            nums3[k+m] = notExhaustedArray[m];
        }
    }

    return nums3;
}

console.log(unionOfSortedArray([1, 2, 3, 4, 5], [1, 2, 7]));
console.log(unionOfSortedArray([3, 4, 6, 7, 9, 9], [1, 5, 7, 8, 8]));