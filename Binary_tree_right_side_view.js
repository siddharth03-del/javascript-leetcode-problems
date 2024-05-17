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
var rightSideView = function(node){
    let finalans = [];
    let ans = [];
    let short = [];
    let q = new Queue1();
    if(node == null){
        return [];
    }
    q.enque(node);
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
    for(let i = 0; i < ans.length; i++){
        let temp = ans[i];
        finalans.push(temp[temp.length - 1]);
    }
    return finalans;
}
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}
let d = new node(5, null, null);
let e = new node(4, null, null);
let b = new node(2, null, d);
let c = new node(3, null, e);
let a = new node(1, b , c);
rightSideView(a);
