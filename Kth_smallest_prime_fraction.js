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
            if(this.arr[index][0] < this.arr[parent][0]){
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
            if(this.arr[lc] && this.arr[lc][0] < this.arr[maxel][0]){
                maxel = lc;
            }
            if(this.arr[rc] && this.arr[rc][0] < this.arr[maxel][0]){
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
}
var kthSmallestPrimeFraction = function(arr, k){
    let hp = new Heap();
    arr.sort((a,b) => a -b);
    for(let i = 0; i < arr.length -1; i++){
        let j = arr.length - 1;
        let calc = arr[i]/arr[j];
        let array = [calc, i, j];
        hp.insert(array);
    }
    for(let i = 1; i < k; i++){
        let ans = hp.delete();
        let a = ans[1];
        let b = ans[2];
        if(a != b){
            let calc = arr[a]/arr[b-1];
            let array = [calc, a, b-1];
            hp.insert(array);
        }
    }
    let result = hp.delete();
    let a = result[1];
    let b = result[2];
    let array = [arr[a], arr[b]];
    return array;
}
console.log(kthSmallestPrimeFraction([1,7],1));