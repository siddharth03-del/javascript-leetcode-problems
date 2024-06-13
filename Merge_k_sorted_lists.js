class Heap{
    constructor(){
        this.arr = [];
    }
    insert(val){
        this.arr.push(val);
        this.upheapify(this.arr.length - 1);
    }
    upheapify(index){
        while(index > 0){
            let parent = Math.floor((index-1)/2);
            if((this.arr[index]).val < (this.arr[parent]).val){
                let temp = this.arr[parent];
                this.arr[parent] = this.arr[index];
                this.arr[index] = temp;
                index = parent;
            }
            else{
                break;
            }
        }
    }
    delete(){
        let r = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.downheapify(0);
        return r;
    }
    downheapify(index){
        while(index < this.arr.length){
            let lc = index*2 + 1;
            let rc = index*2 + 2;
            let maxel = index;
            if(this.arr[lc] && (this.arr[lc]).val < (this.arr[maxel]).val){
                maxel = lc;
            }
            if(this.arr[rc] && (this.arr[rc]).val < (this.arr[maxel]).val){
                maxel = rc;
            }
            if(maxel == index){
                break;
            }
            else{
                let temp = this.arr[maxel];
                this.arr[maxel] = this.arr[index];
                this.arr[index] = temp;
                index = maxel;
            }
        } 
    }
    display(){
        console.log(this.arr);
    }
    isEmpty(){
        if(this.arr.length == 0){
            return true;
        }
        else{
            return false;
        }
    }
}
function ListNode(val){
    this.val = val;
    this.next = null;
}
var mergeKLists = function(lists){
    let hp = new Heap();
    let ll = new ListNode(123);
    let result = ll;
    for(let i = 0; i < lists.length; i++){
        let node = lists[i];
        hp.insert(node);
    }
    while(!hp.isEmpty()){
        let r = hp.delete();
        let temp = r.next;
        r.next = null;
        result.next = r;
        result = r;
        if(temp){
            hp.insert(temp);
        }
    }
    return ll.next;
}