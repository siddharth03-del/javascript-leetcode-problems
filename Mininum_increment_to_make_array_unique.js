var minIncrementForUnique = function(nums){
    nums.sort((a,b) => a - b);
    freq = {};
    let count = 0;
    let last = 0;
    for(let i = 0; i < nums.length ; i++){
        if(freq[nums[i]] == undefined){
            freq[nums[i]] = 1;
            last = nums[i]
        }
        else{
            let target = last + 1;
            count += Math.abs(nums[i] - target);
            freq[target] = 1;
            last = target;
        }
    }
    return count;
}
console.log(minIncrementForUnique([1,2,2]))