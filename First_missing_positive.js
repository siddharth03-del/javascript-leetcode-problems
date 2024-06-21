var firstMissingPositive = function(nums){
    let freq = {};
    for(let i = 0; i < nums.length; i++){
        freq[nums[i]] = true;
    }
    let keyslist = Object.keys(freq);
    let missing = 1;
    for(let i = 0; i < keyslist.length; i++){
        if(keyslist[i] == missing){
            missing++;
        }
    }
    return missing;
}
console.log(firstMissingPositive([1,2,0]));