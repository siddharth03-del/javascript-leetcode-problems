function specialArray(nums) {
    nums.sort((a, b) => a - b);
    let first = 0;
    let last = nums.length;
    let mid = Math.floor((first + last) / 2);
    let ans = -1;
    const lastindex = nums.length - 1;

    while (last >= first) {
        mid = Math.floor((last + first) / 2);
        if (nums[lastindex - mid + 1] >= mid) {
            if (lastindex - mid + 1 > 0) {
                if (nums[lastindex - mid] < mid) {
                    ans = mid;
                    break;
                }
            } else {
                ans = mid;
                break;
            }
        }

        if (nums[lastindex - mid + 1] < mid) {
            if (mid === 0) {
                break;
            }
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }

    return ans;
}
console.log(specialArray([3,6,7,7,0]));