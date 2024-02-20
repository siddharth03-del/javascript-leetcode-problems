function threeSum(nums){
    let returnarray=[];
    nums.sort((x,y)=>x-y);
    let pos=0;
    let i=1;
    let j=nums.length-1;
    for(pos=0;pos<nums.length;pos++){
        if(nums[pos]==0 || nums[pos-1]!=nums[pos]){
            i=pos+1;
            j=nums.length-1;
            while(j>i){
                if(-nums[pos]>(nums[i]+nums[j])){
                    i++;
                }
                else if(-nums[pos]<(nums[i]+nums[j])){
                    j--;
                }
                else{
                    returnarray.push([nums[i],nums[j],nums[pos]]);
                    i++;
                    j--;
                }
            }
        }   
    }
    return returnarray;
}
console.log(threeSum([0,0,0,0]))
