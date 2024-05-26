let global1 = new Array();
let check = new Map();
function f(s, ans){
    if(s == ""){
        ans = ans.trim();
        global1.push(ans);
        return;
    }
    let freq = {};
    let r = "";
    let a = "";
    let i = 0;
    while(i < s.length){
        r = r + s[i];
        i++;
        if(check.get(r) == true){
            if(freq[r] == undefined){
                freq[r] = 1;
                let k = i;
                a = "";
                while(k < s.length){
                    a = a + s[k];
                    k++;
                }
                let g = ans;
                g = g + " " + r;
                r = "";
                i = 0;
                f(a, g);
            
            }
        }
    }
    return;
}
var wordBreak = function(s, wordDict){
    global1 = new Array();
    check = new Map();
    for(let i = 0; i < wordDict.length; i++){
        check.set(wordDict[i], true);
    }
    f(s, "");
    return global1;
}