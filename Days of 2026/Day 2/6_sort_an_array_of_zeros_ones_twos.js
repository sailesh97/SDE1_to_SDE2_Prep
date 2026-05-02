let majorityElement = nums[0], count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == majorityElement){
            count++;
        } else{
            count--;
        }
        if(count == 0){
            majorityElement = -1;
            if((i+1) < nums.length){
                majorityElement = nums[i+1];
            }
        }
    }
    return majorityElement;