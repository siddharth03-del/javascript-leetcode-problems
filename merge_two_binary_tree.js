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
var mergeTree = function(root1, root2){
    var q1 = new Queue1();
    var q2 = new Queue1();
    if(!root1 && root2){
        return root2;
    }
    else if(root1 && !root2){
        return root1;
    }
    else if(!root1 && root2){
        return root1;
    }
    q1.enque(root1);
    q2.enque(root2);
    while(!q1.isEmpty() || !q2.isEmpty()){
        var node1 = q1.deque();
        var node2 = q2.deque();
        node1.val = node1.val + node2.val;
        let left1 = node1.left;
        let left2 = node2.left;
        let right1 = node1.right;
        let right2 = node2.right;
        if( left1 && left2 ){
            q1.enque(left1);
            q2.enque(left2);
        }
        else if(!left1 && left2){
            node1.left = left2;
        }
        if(right1 && right2){
            q1.enque(right1);
            q2.enque(right2);
        }
        else if(!right1 && right2){
            node1.right = right2;
        }
    }
    return root1;
}
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}
let d1 = new node(5, null, null);
let c1 = new node(2, null, null);
let b1 = new node(3, d1, null);
let a1 = new node(1, b1, c1);
let d2 = new node(4, null, null);
let e2 = new node(7, null, null);
let b2 = new node(1, null, d2);
let c2 = new node(3, null, e2);
let a2 = new node(2, b2, c2);
mergeTree(a1, a2);
