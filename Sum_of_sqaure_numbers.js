var judgeSquareSum = function(c){
    let low_b = 0;
    let high_b = Math.floor(Math.pow(c, 0.5));
    let mid_a;
    let mid_b;
    let highreserve = high_b;
    let sum;
    for(mid_a = 0; mid_a <= highreserve; mid_a++){
        low_b = 0;
        high_b = highreserve;
        while(low_b <= high_b){
            mid_b = Math.floor((low_b + high_b)/2);
            sum = Math.pow(mid_a, 2) + Math.pow(mid_b, 2);
            if(sum > c){
                high_b = mid_b - 1;
            }
            else if(sum < c){
                low_b = mid_b + 1;
            }
            else{
                return true;
            }
        }
    }
    return false;
}
console.log(judgeSquareSum(45));