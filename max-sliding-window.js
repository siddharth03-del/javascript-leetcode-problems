var node = function(val){
    this.val = val;
    this.next = null;
}
var MyLinkedList = function (){
    this.head = null;
}
MyLinkedList.prototype.addAtHead = function(val){
    if(this.head == null){
        var n = new node(val);
        this.head = n;
    }
    else{
        var n = new node(val);
        n.next = this.head;
        this.head = n;
    }
}
MyLinkedList.prototype.addAtTail = function(val){
    if(this.head == null){
        this.head = new node(val);
    }
    else{
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = new node(val);
    }
}
MyLinkedList.prototype.get = function(index){
    if(this.head == null){
        return -1;
    }
    let i = 0;
    let temp = this.head;
    for(i; i<index; i++){
        if(temp.next == null){
            if( i == index){
                break;
            }
            else{
                return -1;
            }
        }
        temp = temp.next;
    }
    return temp.val;
}
MyLinkedList.prototype.addAtIndex = function (index, val){
    if(this.head == null && index != 0){
        return -1;
    }
    if(index == 0){
        if(this.head == null){
            this.head = new node(val);
            return;
        }
        else{
            let n = new node(val);
            n.next = this.head;
            this.head = n;
            return;
        }
    }
    else{
        let i = 0;
        let previous = this.head;
        let flag = false;
        for(i; i<=index-2; i++){
            previous = previous.next;
            if(previous.next == null){
                break;
                flag = true;
            }
        }
        if(flag){
            if(i == index - 2){
                let n = new node(val);
                previous.next = n;
            }
            else{
                return -1;
            }
        }
        let n = new node(val);
        n.next = previous.next;
        previous.next = n;
        return;
    }
}
MyLinkedList.prototype.deleteAtIndex = function(index){
    if(index == 0){
        let tobedeleted = this.head;
        if(tobedeleted.next == null){
            delete tobedeleted;
            this.head = null;
            return
        }
        else{
            let new1 = tobedeleted.next;
            this.head = new1;
            delete tobedeleted;
            return;
        }
    }
    else{
        let i = 1;
        let previous = this.head;
        for(i; i<=index - 1; i++){
            if(previous.next == null){
                return -1;
            }
            previous = previous.next;
        }
        if(previous.next == null){
            return -1;
        }
        let tobedeleted = previous.next;
        if(tobedeleted.next == null){
            previous.next = null;
            delete tobedeleted;
            console.log("hey i am deleting");
            return;
        }
        else{
            let next = tobedeleted.next;
            previous.next = next;
            tobedeleted.next = null;
            delete tobedeleted;
            console.log("hey i am deleting");
            return;
        }
    }
}
MyLinkedList.prototype.deleteAtTail = function(){
    let tobedeleted;
    let prev;
    if(this.head == null){
        return -1;
    }
    tobedeleted = this.head;
    if(tobedeleted.next == null){
        this.head = null;
        delete tobedeleted;
        return;
    }
    while(tobedeleted.next != null){
        prev = tobedeleted;
        tobedeleted = tobedeleted.next;
    }
    prev.next = null;
    delete tobedeleted;

MyLinkedList.prototype.atTail = function(){
    let tobeknown = this.head;
    while(tobeknown.next != null){
        tobeknown = tobeknown.next;
    }
    return tobeknown.val;
}
MyLinkedList.prototype.atHead = function(){
    return this.head.val;
}
MyLinkedList.prototype.isEmpty1 = function(){
    if(this.head == null){
        return true;
    }
    else{
        return false;
    }
}
class deque{
    dll;
    constructor(){
        this.dll = new MyLinkedList();
    }
    add_at_front(val){
        this.dll.addAtHead(val);
    }
    add_at_back(val){
        this.dll.addAtTail(val);
    }
    remove_from_front(){
        return this.dll.deleteAtIndex(0);
    }
    remove_from_back(){
        this.dll.deleteAtTail();
    }
    element_at_back(){
        return this.dll.atTail();
    }
    element_at_front(){
        return this.dll.atHead();
    }
    isEmpty(){
        return this.dll.isEmpty1();
    }
}
var maxSlidingWindow = function(nums, k){
    let checker = 1;
    let front = 1;
    let back = k;
    var dq = new deque();
    dq.add_at_back(k-1);
    const answer = [];
    for( let i = k-2; i >= 0; i--){
        if(nums[i] > nums[dq.element_at_front()]){
            dq.add_at_front(i);
        }
    }
    answer.push(nums[dq.element_at_front()]);
    //first ready the deque for first time
    for(back; back < nums.length; back++){
        checker = 1;
        if(dq.element_at_front() == front - 1){
            dq.remove_from_front();
            if(dq.isEmpty()){
                dq.add_at_back(back);
                answer.push(nums[dq.element_at_front()]);
                front++;
                checker = 0;

            }
        }

        while( nums[back] > nums[dq.element_at_back()]){
            if(dq.isEmpty()){
                break;
            }
            dq.remove_from_back(); 
            if(dq.isEmpty()){
                break;
            }
            }
        if(checker){
            dq.add_at_back(back);
            answer.push(nums[dq.element_at_front()]);
            front++;
        }
    }
    return answer;
}
let num = [1,3,1,2,0,5];
let n = 3;
console.log(maxSlidingWindow(num, n));