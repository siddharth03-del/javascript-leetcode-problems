var romanToInt = function(s){
    let int = 0;
    let roman = {'I':1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
    let previous = 0;
    for(let i = 0; i < s.length ; i++){
        if(previous < roman[s[i]]){
            int = int - previous + (roman[s[i]] - previous)
        }
        else{
            int = int + roman[s[i]];
        }
        previous = roman[s[i]];
    }
    return int;
}
