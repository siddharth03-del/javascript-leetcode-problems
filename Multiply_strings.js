var multiply = function(num1, num2){
    if(num1 == "0" || num2 == "0"){
        return "0";
    }
    let addition = [];
    let carry = 0;
    let r = 0;
    for(let i = num1.length - 1; i >= 0; i--){
        let a = num1[i];
        a = parseInt(a);
        let n = "";
        let carry = 0;
        for(let j = num2.length - 1; j >= 0; j--){
            let number;
            let b = num2[j];
            b = parseInt(b);
            let c = a*b + carry;
            carry = Math.floor(c/10);
            if(j != 0){
                number = c % 10;
            }
            else{
                number = c;
            }
            n = number.toString() + n;
        }
        let str = "0";
        str = str.repeat(r);
        r++;
        n = n + str;
        addition.push(n);
    }
    let n1 = addition[addition.length - 1];
    let n2;
    for(let j = addition.length - 2; j >= 0; j--){
        n2 = addition[j];
        let a = n1.length - 1;
        let b = n2.length - 1;
        let carry = 0;
        let n3 = "";
        while(n1[a] && n2[b]){
            let sum = parseInt(n1[a]) + parseInt(n2[b]) + carry;
            carry = 0;
            if(sum > 9){
                if(a == 0 && b == 0){
                    n3 = String(sum - 10) + n3;
                    n3 = "1" + n3;
                    break;
                }
                carry = 1;
                n3 = String(sum - 10) + n3;
            }
            else{
                n3 = String(sum) + n3;
            }
            a--;
            b--;
        }
        if(b > a){
            while(n2[b]){
                let sum = parseInt(n2[b]) + carry;
                carry = 0;
                if(sum > 9){
                    if(b == 0){
                        n3 = "0" + n3;
                        n3 = "1" + n3;
                    }
                    else{
                        carry = 1;
                        n3 = String(sum - 10) + n3;
                    }
                }
                else{
                    n3 = String(sum) + n3;
                }
                b--;
            }
        }
        else if(a > b){
            while(n1[a]){
                let sum = parseInt(n1[a]) + carry;
                carry = 0;
                if(sum > 9){
                    if(a == 0){
                        n3 = "0" + n3;
                        n3 = "1" + n3;
                    }
                    else{
                        carry = 1;
                        n3 = String(sum - 10) + n3;
                    }
                }
                else{
                    n3 = String(sum) + n3;
                }
                a--;
            }
        }
        n1 = n3;
    }
    return n1;
}