var reverseString = function(s){
    let i = 0;
    let j = s.length - 1;
    while(j >= i){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return;
}