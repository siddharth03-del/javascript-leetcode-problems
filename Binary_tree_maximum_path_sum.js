let max;
function f(node){
    if(!node.right && !node.left){
        if(node.val > max){
            max = node.val;
        }
        return node.val;
    }
    let left = node.left;
    let right = node.right;
    let leftmax = 0;
    let rightmax = 0;
    let value = node.val;
    if(left){
        leftmax = f(left);
    }
    if(right){
        rightmax = f(right);
    }
    let calcmax = Math.max(leftmax + value, rightmax + value, value)
    if(leftmax + rightmax + node.val > max){
        max = (leftmax + rightmax + node.val);
    }
    if(calcmax > max){
        max = calcmax;
    }
    return calcmax;
}
var maxPathSum = function(root){
    max = root.val;
    f(root);
    return max;
}