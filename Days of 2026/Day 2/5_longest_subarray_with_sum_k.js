function longestSubArrayWithSumK(nums, k){
    let sum = 0, map = new Map(), maxLen = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(sum == k){
            maxLen = maxLen > i+1 ?  maxLen : i+1;
        }
        if(!(map.get(sum) >= 0)){
            map.set(sum, i);
        }
        let rem = sum - k;
        let remExistsInMapIndex = map.get(rem);
        let lengthOfSubArray = remExistsInMapIndex >= 0 ? (i - remExistsInMapIndex) : 0;
        if(remExistsInMapIndex >= 0){
            maxLen = maxLen > lengthOfSubArray ?  maxLen : lengthOfSubArray;
        }
    }
    return maxLen;
}

console.log(longestSubArrayWithSumK([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 7));
console.log(longestSubArrayWithSumK([2, 0, 0, 3], 3));
console.log(longestSubArrayWithSumK([-1, 1, 1], 1));

/**
 * Learnings:
 * 1. prefix sum
 * 2. hash collisions
 */

