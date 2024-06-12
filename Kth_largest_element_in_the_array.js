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
            if(this.arr[index] > this.arr[parent]){
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
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.downheapify(0);
    }
    downheapify(index){
        while(index < this.arr.length){
            let lc = index*2 + 1;
            let rc = index*2 + 2;
            let maxel = index;
            if(this.arr[lc] && this.arr[lc] > this.arr[maxel]){
                maxel = lc;
            }
            if(this.arr[rc] && this.arr[rc] > this.arr[maxel]){
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
    biggest(){
        return this.arr[0];
    }
}
var findKthLargest = function(nums, k){
    let hp = new Heap();
    for(let i = 0; i < nums.length; i++){
        hp.insert(nums[i]);
        }
    for(let i = 1; i < k; i++){
        hp.delete();
        }
    let r = hp.biggest();
    hp.display();
    return r;
}