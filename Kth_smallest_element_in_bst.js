let arr = [];
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
}
var kthSmallest = function(root, k){
    arr = [];
    f(root);
    return arr[k-1];
}