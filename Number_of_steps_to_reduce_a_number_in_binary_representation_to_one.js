var numSteps = function(s){
    let steps = 0;
    let num = BigInt(0);
    let p = 0 ;
    for(let i = s.length - 1; i >= 0; i--){
        let n = parseInt(s[i]);
        num = num +BigInt(n*Math.pow(2,p));
        p++;
    }
    console.log(num);
    while(num != 1){
        if(num % BigInt(2) == 0){
            num = num / BigInt(2);
            steps++;
        }
        else{
            num++;
            steps++;
        }
    }
    return steps;
}
console.log(numSteps("1111011110000011100000110001011011110010111001010111110001"));