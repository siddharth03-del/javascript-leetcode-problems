function f(root, target){
    if(!root.right && !root.left){
        if(root.val == target){
            return true;
        }
        else{
            return false;
        }
    }
    let boolleft = false;
    let boolright = false;
    let left = root.left;
    let right = root.right;
    if(left){
        boolleft = f(left, target);
    }
    if(right){
        boolright = f(right, target);
    }
    if(boolleft){
        root.left = null;
        delete left;
    }
    if(boolright){
        root.right = null;
        delete right;
    }
    if(root.val == target && !root.right && !root.left){
        return true;
    }
    else{
        return false;
    }
}
var removeLeafNodes = function(root, target){
    let bool = f(root, target);
    if(bool){
        return null;
    }
    else{
        return root;
    }
}