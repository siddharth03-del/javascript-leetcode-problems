let array;
function fun(i, j){
    let mid = Math.floor((i + j)/ 2);
    let a = new node(array[mid], null, null);
    if(mid-1 >= i){
        a.left = fun(i, mid - 1);
    }
    if(j >= mid+1){
        a.right = fun(mid + 1, j);
    }
    return a;
}
var sortedarray = function(node){
    let right = node.right;
    let left = node.left;
    if(left){
        sortedarray(left);
    }
    array.push(node.val);
    if(right){
        sortedarray(right);
    }
    return;
}
var balanceBST = function(){
    array = new Array();
    sortedarray(node);
    let root = fun(0, array.length - 1);
    return root;
}
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}