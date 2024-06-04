var longestPalindrome = function(s){
    let freq = new Map();
    for(let i = 0; i < s.length; i++){
        if(freq.get(s[i]) == undefined){
            freq.set(s[i],1);
        }
        else{
            let k = freq.get(s[i]);
            k++;
            freq.set(s[i], k);
        }
    }
    let length = 0;
    let odd = 0;
    for(let i of freq.values()){
        if(i % 2 == 0){
            length = length +  i;
        }
        else{
            if(i > odd){
                if(odd != 0){
                    length = length - 1;
                }
                length = length + i;
                odd = i;
            }
            else{
                length = length + i - 1;
            }
        }
    }
    return length;
}