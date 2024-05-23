function mid(head, tail){
    let slow = head;
    let fast = head;
    while(fast != tail && fast.next!= tail){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function makeBST(head, tail){
    if(head == null){
        return null;
    }
    if(head == tail){
        return null;
    }
    let mid = calcmid(head, tail);
    let root = new TreeNode(mid.val);
    root.left = makeBST(head, mid);
    root.right = makeBST(mid.next, tail);
    return root;
}
var sortedListToBST = function(head){
    return makeBST(head, null);
}
