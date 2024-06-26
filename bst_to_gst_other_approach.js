function f(root, value){
    let right = root.right;
    let left = root.left;
    let val = 0;
    let leftcall = false;
    let rightcall = false;
    if(right){
        rightcall = true;
        val = f(right, value);
    }
    if(!rightcall){
        val = value;
    }
    let leftval = 0;
    if(left){
        leftcall = true;
        leftval = f(left, val + root.val);
    }
    if(rightcall){
        root.val = root.val + val;
    }
    else{
        root.val = root.val + value;
    }
    if(leftcall){
        return leftval;
    }
    else{
        return root.val;
    }
}
var bstToGst = function(root){
    f(root, 0);
    return root;
}