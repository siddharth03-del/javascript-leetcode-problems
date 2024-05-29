var equalSubstring = function(s, t, maxCost){
    let maxlength = 0;
    let high = s.length;
    let low = 1;
    let mid = (high + low) / 2;
    let totalcost = 0;
    while(high >= low){
        let i = 0;
        let j = 0;
        let currlength = 0;
        totalcost = 0;
        mid = Math.floor((low + high) / 2);
        while(j <= s.length){
            if(currlength < mid){
                totalcost += Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
                j++;
                currlength = j - i;
            }
            else if(currlength == mid){
                if(totalcost <= maxCost){
                    maxlength = mid;
                    break;
                }
                else{
                    if(j == s.length){
                        break;
                    }
                    totalcost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
                    i++;
                    totalcost += Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
                    j++;
                }
            }
        }
        if(totalcost <= maxCost){
            low = mid + 1;
        }
        else if(totalcost > maxCost){
            high = mid -1;
        }
    }
    return maxlength;
}
console.log(equalSubstring("abcd", "cdef", 3));