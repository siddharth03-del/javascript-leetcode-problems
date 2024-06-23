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
var longestSubarray = function(nums, limit){
    let maxHeap = new Heap((a,b) => a[0] > b[0]);
    let minHeap = new Heap((a,b) => a[0] < b[0]);
    let longest = -Infinity;
    let i = 0; 
    let j = 0;
    while(j < nums.length){
        maxHeap.insert([nums[j], j]);
        minHeap.insert([nums[j], j]);
        let max = maxHeap.get();
        let min = minHeap.get();
        while(!((i <= min[1] && j >= min[1]) && (i <= max[1] && j >= max[1]))){
            if(!(i <= max[1] && j >= max[1])){
                maxHeap.delete();
                max = maxHeap.get();
            }
            else if(!(i <= min[1] && j >= min[1])){
                minHeap.delete();
                min = minHeap.get();
            }
        }
        if(max[0] - min[0] > limit){
            let maxconsider = max[1];
            let minconsider = min[1];
            while(max[0] - min[0] > limit){
                if(i == maxconsider){
                    maxHeap.delete();
                    i++;
                }
                else if(i == minconsider){
                    minHeap.delete();
                    i++;
                }
                else{
                    i++;
                }
                max = maxHeap.get();
                min = minHeap.get();
                while(!((i <= min[1] && j >= min[1]) && (i <= max[1] && j >= max[1]))){
                    if(!(i <= max[1] && j >= max[1])){
                        maxHeap.delete();
                        max = maxHeap.get();
                    }
                    else if(!(i <= min[1] && j >= min[1])){
                        minHeap.delete();
                        min = minHeap.get();
                    }
                }
            }
        }
        if(j - i + 1 >= longest){
            longest = j - i + 1;
        }
        j++;
    }
    return longest;
}