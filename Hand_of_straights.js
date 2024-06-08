var isNStraightHand = function(hand, groupsize){
    let freq = {};
    for(let i = 0; i < hand.length ; i++){
        if(freq[hand[i]] == undefined){
            freq[hand[i]] = 1;
        }
        else{
            freq[hand[i]]++;
        }
    }
    let array = [];
    let keys = Object.keys(freq);
    let i = 0;
    while(i < keys.length){
        if(array.length == groupsize){
            array = [];
            i = 0;
        }
        else{
            if(array.length == 0){
                array.push(keys[i]);
                if(freq[keys[i]] == 1){
                    keys.splice(i, 1);
                }
                else{
                    freq[keys[i]]--;
                    i++;
                }
            }
            else if((keys[i] - array[array.length - 1]) == 1){
                array.push(keys[i]);
                if(freq[keys[i]] == 1){
                    keys.splice(i, 1);
                }
                else{
                    freq[keys[i]]--;
                    if(i != keys.length - 1){
                        i++;
                    }
                }
            }
            else{
                return false;
            }
        }
    }
    if(array.length == groupsize){
        if(keys.length == 0){
            return true;
        }
    }
    else{
        return false;
    }
}
console.log(isNStraightHand([1,1,2,2,3,3],3));
