function f(root,key){
    if(root.val < key){
        if(!root.right && !root.left){
            return root;
        }
        root.right = f(root.right, key)
        return root;
    }
    else if(root.val > key){
        if(!root.right && !root.left){
            return root;
        }
        root.left = f(root.left, key)
        return root;
    }
    else{
        if(!root.right && !root.left){
            return null;
        }
        else if(root.right == null){
            return root.left;
        }
        else if(root.left == null){
            return root.right;
        }
        else{
            let temp = root.right;
            while(temp.left){
                temp = temp.left;
            }
            root.val = temp.val;
            root.right = f(root.right, temp.val);
            return root;
        }
    }
}
var deleteNode = function(root,key){
    if(root == null){
        return null;
    }
    let node = f(root, key);
    return node;
}
