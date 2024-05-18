let steps = 0;
function f(root){
    if(!root.left && !root.right){
        if(root.val == 0){
            steps++;
            return -1;
        }
        else{
            steps = steps + (root.val - 1);
            return root.val - 1;
        }
    }
    let left = root.left;
    let right = root.right;
    let leftdebt = 0;
    let rightdebt = 0;
    if(left){
        leftdebt = f(left)
    }
    if(right){
        rightdebt = f(right);
    }
    if(root.val == 0){
        if(leftdebt + rightdebt <= 0){
            let increment = leftdebt + rightdebt - 1;
            steps = steps + -(increment);
            return leftdebt + rightdebt - 1;
        }
        else if(leftdebt + rightdebt > 0){
            let increment = (leftdebt + rightdebt -1);
            steps = steps + increment;
            return increment;
        }
    }
    else{
        if(leftdebt + rightdebt  < 0){
            let increment = leftdebt + rightdebt + root.val - 1;
            if(increment > 0){
                steps = steps + increment;
                return increment;
            }
            else{
                steps = steps + -(increment);
                return increment;
            }
        }
        else{
            let increment = leftdebt + rightdebt + root.val - 1;
            steps = steps + increment;
            return increment;
        }
    }
}
var distributeCoins = function(root){
    steps = 0;
    f(root);
    return steps;
}
