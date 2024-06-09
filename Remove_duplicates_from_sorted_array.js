var removeDuplicates = function(nums){
    let freq = new Map();
    for(let i = 0; i < nums.length; i++){
        if(freq.get(nums[i]) == undefined){
            freq.set(nums[i], 1);
        }
    }
    let index = 0;
    for(let i of freq.keys()){
        nums[index] = i;
        index++;
    }
    return index;
}