let largest = 0;
let bool = false;
function f(root){
    if(!root.right && !root.left){
        if(!bool){
            largest = root.val;
            bool = true;
        }
        else{
            let input = root.val + largest;
            root.val = input;
            largest = input;
        }
        return;
    }
    if(root.right){
        f(root.right);
    }
    let input = root.val + largest;
    root.val = input;
    largest = input;
    if(root.left){
        f(root.left);
    }
    return;
}
var bstToGst = function(root){
    f(root);
    return root;
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
bstToGst(a);