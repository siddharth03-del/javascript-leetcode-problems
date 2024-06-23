var checkSubarraySum = function(nums, k){
    let sum = 0;
    let r = 0;
    let count = {};
    count[0] = -1;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        r = sum % k;
        if(count[r] == undefined){
            count[r] = i;
        }
        else{
            if(i - count[r] >= 2){
                return true;
            }
        }
    }
    return false;
}