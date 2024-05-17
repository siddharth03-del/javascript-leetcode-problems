var pairSum = function(head){
    let j = 1;
    let back1 = head;
    let forward = head;
    while( forward.next != null){
        if(j % 2 == 0){
            forward = forward.next;
            j++;
        }
        else{
            if(j != 1){
                back1 = back1.next;
            }
            forward = forward.next;
            j++;
        }
    }
    let temp;
    let prev = back1.next;
    if(prev.next == null){
        return (head.val + prev.val);
    }
    let next1 = prev.next;
    back1.next = null;
    while(next1.next != null){
        temp = next1.next;
        next1.next = prev;
        prev = next1;
        next1 = temp;
    }
    next1.next = prev;
    let tracker = head;
    let maximum = tracker.val + next1.val;
    while(tracker.next != null && next1.next != null){
        if(maximum < (tracker.val + next1.val)){
            maximum = (tracker.val + next1.val);
        }
        tracker = tracker.next;
        next1 = next1.next;
    }
    if(maximum  < (tracker.val + next.val)){
        maximum = (tracker.val + next.val);
    }
    return maximum;
}
