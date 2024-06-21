class Heap{
    constructor(comp){
        this.arr = [];
        this.compare = comp;
    }
    insert(val){
        this.arr.push(val);
        this.upheapify(this.arr.length - 1);
    }
    upheapify(index){
        while(index > 0){
            let parent = Math.floor((index-1)/2);
            if(this.compare(this.arr[index] , this.arr[parent])){
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
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.downheapify(0);
        return temp;
    }
    downheapify(index){
        while(index < this.arr.length){
            let lc = index*2 + 1;
            let rc = index*2 + 2;
            let maxel = index;
            if(this.arr[lc] && this.compare(this.arr[lc] , this.arr[maxel])){
                maxel = lc;
            }
            if(this.arr[rc] && this.compare(this.arr[rc] , this.arr[maxel])){
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
    get(){
        return this.arr[0];
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
var maxSlidingWindow = function(nums, k){
    let maxHeap = new Heap((a,b) => a[0] > b[0]);
    let result = [];
    let start = 0;
    let end = 0;
    for(let i = 0; i < k; i++){
        maxHeap.insert([nums[i], i]);
        end = i;
    }
    while(end < nums.length){
        let check = maxHeap.get();
        while(!(start <= check[1] && end >= check[1])){
            maxHeap.delete();
            check = maxHeap.get();
        }
        result.push(maxHeap.get()[0]);
        start++;
        end++;
        if(end < nums.length){
            maxHeap.insert([nums[end], end]);
        }
    }
    return result;
}
console.log(maxSlidingWindow([1,-1],1));