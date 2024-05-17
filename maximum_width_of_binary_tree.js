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
var widthOfBinaryTree = function(root){
    let checker = 0;
    let ans = [];
    let short = [];
    let q = new Queue1();
    q.enque(root);
    q.enque(null);
    while(!q.isEmpty()){
        if(q.atTop() == null){
            q.deque();
            if(checker < 1){
                break;
            }
            ans.push(short);
            short = [];
            checker = 0;
            let left;
            let right;
            let store = q.deque();
            if(store == "#"){
                left = "#";
                right = "#"
            }
            else{
                left = store.left;
                right = store.right;
            }
            q.enque(null);
            if(left == null){
                q.enque("#");
            }
            else{
                q.enque(left);
            }
            if(right == null){
                q.enque("#");
            }
            else{
                q.enque(right);
            }
            if(store == "#"){
                short.push("#");
            }
            else{
                checker++;
                short.push(store.val);
            }
        }
        else{
            let store = q.deque();
            let left;
            let right;
            if(store == "#"){
                left = "#";
                right = "#"
            }
            else{
                left = store.left;
                right = store.right;
            }
            if(left == null){
                q.enque("#");
            }
            else{
                q.enque(left);
            }
            if(right == null){
                q.enque("#");
            }
            else{
                q.enque(right);
            }
            if(store == "#"){
                short.push("#");
            }
            else{
                checker++;
                short.push(store.val);
            }
        }
    }
    let longest = 0;
    let flag = true;
    for(let j = 0; j < ans.length; j++){
        let arr = ans[j];
        let start;
        let back;
        flag = true;
        for(let i = 0 ; i < arr.length; i++){
            if(arr[i] != "#" && flag){
                flag = false;
                start = i;
            }
            if(arr[i] != "#"){
                back = i;
            }
        }
        let l = back - start + 1;
        if(l > longest){
            longest = l;
        }
    }
    return longest;
}
var node = function(val, left , right){
    this.val = val;
    this.left = left;
    this.right = right;
}
let f = new node(6, null, null);
let g = new node(7, null, null);
let d = new node(5, f, null);
let e = new node(9, g, null);
let b = new node(3, d , null);
let c = new node(2, null, e);
let a = new node(1, b, c);
console.log(widthOfBinaryTree(a));