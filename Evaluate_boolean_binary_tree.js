function f(root){
    if(!root.right && !root.left){
        if(root.val == 0){
            return false;
        }
        else{
            return true;
        }
    }
    let value1 = f(root.left);
    let value2 = f(root.right);
    if(root.val == 2){
        return (value1 || value2);
    }
    else{
        return (value1 && value2);
    }
    return;
}
var evaluateTree = function(root){
    return f(root);
}