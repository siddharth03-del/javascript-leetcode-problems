function fourSum(nums,target){
    let returnarray=[];
    nums.sort((x,y)=>x-y);
    let pos1=0;
    let pos2=1;
    let i=pos2+1;
    let j=nums.length-1;
    for(pos1=0;pos1<nums.length;pos1++){
        if(nums[pos1]!=nums[pos1-1]){
            for(pos2=pos1+1 ; pos2<nums.length;pos2++){
                if(nums[pos2]!=nums[pos2-1] || nums[pos2]==nums[pos1]){
                    i=pos2+1;
                    j=nums.length-1;
                    while(j>i){
                        if((nums[i]+nums[j]) > target-(nums[pos1]+nums[pos2])){
                            j--;
                        }
                        else if((nums[i]+nums[j]) < target-(nums[pos1]+nums[pos2])){
                            i++;
                        }
                        else{
                            returnarray.push([nums[pos1],nums[pos2],nums[i],nums[j]])
                            i++;
                            j--;
                        }
                    }
                }
            }
        }
    }
    let uniqueArr = Array.from(new Set(returnarray.map(JSON.stringify))).map(JSON.parse);
    return uniqueArr;
}
console.log(fourSum([2,2,2,2,2,2,2],8))
