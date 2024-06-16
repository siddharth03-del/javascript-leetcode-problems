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
var minCostToHireWorkers = function(quality, wage , k){
    let ratio = [];
    let maxquality = new Heap((a,b) => a[0] > b[0]);
    for(let i = 0; i < quality.length; i++){
        ratio.push([wage[i]/quality[i], i]);
    }
    ratio.sort((a,b) => a[0] - b[0]);
    let cost = Infinity;
    let qualitysum = 0;
    let maxratioindex = 0;
    for(let i = 0; i < ratio.length ; i++){
        let arr = ratio[i];
        qualitysum += quality[arr[1]];
        maxquality.insert([quality[arr[1]], i]);
        if(maxquality.arr.length == k){
            let calc = qualitysum*(ratio[i][0]);
            if(calc < cost){
                cost = calc;
            }
            let quality = maxquality.delete();
            qualitysum -= quality[0];
        }
    }
    return cost;
}