let l;
let h;
function f(root){
    if(root.val > h || root.val < l){
        if(!root.right && !root.left){
            return null;
        }
        let left = root.left;
        let right = root.right;
        if(root.val > h){
            if(left){
                return f(left);
            }
            else{
                return null;
            }
        }
        else if(root.val < l){
            if(right){
                return f(right);
            }
            else{
                return null;
            }
        }
    }
    else{
        let left = root.left;
        let right = root.right;
        if(left){
            root.left = f(left);
        }
        if(right){
            root.right = f(right);
        }
    }
    return root;
}
var trimBST = function(root, low , high){
    l = low;
    h = high;
    return f(root);
}