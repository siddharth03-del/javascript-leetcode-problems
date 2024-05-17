let dp = new Map();
function f(root){
    if(dp.get(root) != undefined){
        dp.get(root);
    }
    if(root == null){
        return 0;
    }
    let left1 = root.left;
    let right1 = root.right;
    let a ;
    let b ; 
    let c ; 
    let d ; 
    if(left1){
        a = left1.left;
        b = left1.right;
    }
    if(right1){
        c = right1.left;
        d = right1.right;
    }
    let add = 0;
    if(a){
        add += f(a);
    }
    if(b){
        add += f(b);
    }
    if(c){
        add += f(c);
    }
    if(d){
        add += f(d)
    }
    let i = root.val + add;
    let j = f(left1) + f(right1);
    let ans = Math.max(i,j);
    dp.set(root, ans);
    return ans;
}
var rob = function(root){
    return f(root);
} 
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}
let d = new node(3, null, null);
let e = new node(1, null, null);
let b = new node(2, null, d);
let c = new node(3, null, e);
let a = new node(3, b, c);
console.log(rob(a));