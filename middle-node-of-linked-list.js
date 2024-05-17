var middleNode = function(head){
    let j = 1;
    let back = head;
    let forward = head;
    while( forward.next != null){
        if(j % 2 == 0){
            forward = forward.next;
            j++;
        }
        else{
            back = back.next;
            forward = forward.next;
            j++;
        }
    }
    return back;
}