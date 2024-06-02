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
var addTwoNumbers = function(l1, l2){
    let h1 = l1.head;
    let h2 = l2.head;
    let num1 = "";
    let num2 = "";
    while(h1 != null){
        num1 = (h1.val).toString() + num1;
        h1 = h1.next;
    }
    while(h2 != null){
        num2 = (h2.val).toString() + num2;
        h2 = h2.next;
    }
    let l3 = new MyLinkedList();
    let i = num1.length-1;
    let j = num2.length - 1;
    let carry = 0;
    while(num1[i] && num2[j]){
        let sum = parseInt(num1[i]) + parseInt(num2[j]) + carry;
        carry = 0;
        if(sum > 9){
            if(i == 0 && j == 0){
                l3.addAtTail(sum - 10);
                l3.addAtTail(1);
            }
            carry = 1;
            l3.addAtTail(sum - 10);
        }
        else{
            l3.addAtTail(sum);
        }
        i--;
        j--;
    }
    if(j > i){
        while(num2[j]){
            let sum = parseInt(num2[j]) + carry;
            carry = 0;
        if(sum > 9){
            if(j == 0){
                l3.addAtTail(0);
                l3.addAtTail(1);
            }
            carry = 1;
            l3.addAtTail(sum - 10);
        }
        else{
            l3.addAtTail(sum);
        }
        j--;
        }
    }
    else if(i > j){
        while(num1[i]){
            let sum = parseInt(num1[i]) + carry;
            carry = 0;
        if(sum > 9){
            if(i == 0){
                l3.addAtTail(0);
                l3.addAtTail(1);
            }
            carry = 1;
            l3.addAtTail(sum - 10);
        }
        else{
            l3.addAtTail(sum);
        }
        i--;
        }
    }
    return l3;
}