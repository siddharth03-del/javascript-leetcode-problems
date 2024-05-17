var swapNodes = function(head, k){
    let i = 1;
    let frombegining = head;
    while(i < k){
        frombegining = frombegining.next;
        i++;
    }
    let temp = frombegining;
    let fromending = head;
    while(temp.next != null){
        fromending = fromending.next;
        temp = temp.next;
    }
    let tempval = frombegining.val;
    let tempval2 = fromending.val;
    frombegining.val = tempval2;
    fromending.val = tempval;
    if(k == 1){
        return frombegining;
    }
    else{
        return head;
    }
}