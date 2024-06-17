var minPatches = function(nums, n){
    let patch = 0;
    let range = 0;
    let capability = 0;
    nums.push(n);
    for(let i = 0; i < nums.length ; i++){
        if(n < capability){
            break;
        }
        if(capability < nums[i]){
            for(let j = capability; j <= nums[i]; j++){
                if(capability  >= n){
                    return patch;
                }
                if(capability < j){
                    if(j != nums[i]){
                        patch++;
                        console.log(j);
                    }
                    capability += j;
                    if(capability < nums[i]){
                        j = capability;
                    }
                    else if(capability > nums[i]){
                        if(capability > n){
                            return patch;
                        }
                    }
                }
                else{
                    if(j == nums[i]){
                        capability += j;
                    }
                    else if(capability >= n){
                        return patch;
                    }
                    else if(capability > j){
                        if(capability >= nums[i]){
                            capability += nums[i]
                            j = capability;
                        }
                        else{
                            j = capability;
                        }
                    }
                }
            }
        }
        else{
            capability += nums[i];
            if(capability < nums[i]){
                j = capability;
            }
        }
    }
    return patch;
}
console.log(minPatches([1,2,2,6,34,38,41,44,47,47,56,59,62,73,77,83,87,89,94],20));