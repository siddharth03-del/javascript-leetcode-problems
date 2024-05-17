class Queue1{
    #arr;
    constructor(){
        this.#arr = [];
    }
    enque(val){
        this.#arr.push(val);
    }
    deque(){
        let ans = this.#arr[0];
        let i = 0;
        let j = 1;
        for(j ; j < this.#arr.length ; j++){
            this.#arr[i] = this.#arr[j];
            i++;
        }
        this.#arr.pop();
        return ans;
    }
    isEmpty(){
        if(this.#arr.length == 0){
            return true;
        }
        else{
            return false;
        }
    }
    atTop(){
        return this.#arr[0];
    }
}
var levelOrder = function(root){
    let ans = [];
    let short = [];
    let q = new Queue1();
    if(root == null){
        return [];
    }
    q.enque(root);
    q.enque(null);
    while(!q.isEmpty()){
        if(q.atTop() == null){
            q.deque();
            ans.push(short);
            short = [];
            if(q.isEmpty()){
                break;
            }
            let store = q.deque();
            let left = store.left;
            let right = store.right;
            q.enque(null);
            if(left){
                q.enque(left);
            }
            if(right){
                q.enque(right);
            }
            short.push(store.val);
        }
        else{
            let store = q.deque();
            let left = store.left;
            let right = store.right;
            if(left){
                q.enque(left);
            }
            if(right){
                q.enque(right);
            }
            short.push(store.val);
        }
    }
    return ans;
}
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}
let b = new node(9, null, null);
let d = new node(15, null, null);
let e = new node(7, null, null);
let c = new node(20, d, e);
let a = new node(2, b, c);
console.log(levelOrder(a));