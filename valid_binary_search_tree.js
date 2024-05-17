let arr = [];
let bool;
function f(root){
    if(root == null){
        return true;
    }
    if(!root.left && !root.right){
        arr.push(root.val);
        return true;
    }
    f(root.left);
    arr.push(root.val);
    f(root.right);
    if(root.left){
        if(root.left.val >= root.val){
            bool = false;
        }
    }
    return true;
}
var isValidBST = function(root){
    arr = [];
    bool = true;
    if(root == null){
        return true;
    }
    f(root);
    if(arr.lenght == 1){
        return true;
    }
    for(let i = 0; i <= arr.length-2; i++){
        if(arr[i] > arr[i+ 1]){
            return false;
        }
    }
    if(bool){
        return true;
    }
    else{
        return false;
    }
}
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}
var d = new node(0, null, null);
var e = new node(2, null, null);
var f1 = new node(4, null, null);
var g = new node(6, null, null);
var b = new node(1, d, e);
var c = new node(5, f1, g);
var a = new node(3, b , c);
console.log(isValidBST(a));