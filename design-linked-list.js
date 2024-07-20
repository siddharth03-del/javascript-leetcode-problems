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
            return;
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