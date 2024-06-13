
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
            if(this.arr[index][2] < this.arr[parent][2]){
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
            if(this.arr[lc][2] && this.arr[lc][2] < this.arr[maxel][2]){
                maxel = lc;
            }
            if(this.arr[rc][2] && this.arr[rc][2] < this.arr[maxel][2]){
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
var kClosest = function(points, k){
    var hp = new Heap();
    let res = [];
    for(let i = 0; i < points.length; i++){
        let a = points[i][0];
        let b = points[i][1];
        let dist = a*a + b*b;
        dist = Math.pow(dist, 0.5);
        let arr = points[i];
        arr.push(dist);
        hp.insert(arr);
    }
    for(let i = 0; i < k; i++){
        let r = hp.delete();
        r.pop();
        res.push(r);
    }
    return res;
}