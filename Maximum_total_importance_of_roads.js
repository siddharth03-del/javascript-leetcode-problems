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
var maximumImportance = function(n , roads){
    let LowestHeap = new Heap((a,b) => a[1] < b[1]);
    let values = new Array(n).fill(0);
    for(let i = 0; i < roads.length; i++){
        let a = roads[i][0];
        let b = roads[i][1];
        values[a]++;
        values[b]++;
    }
    for(let i = 0; i < n; i++){
        LowestHeap.insert([i, values[i]]);
    }
    values = new Array(n);
    let assign = 1;
    while(!LowestHeap.isEmpty()){
        let temp = LowestHeap.delete();
        values[temp[0]] = assign;
        assign++;
    }
    let maximumImportance = 0;
    for(let i = 0; i < roads.length; i++ ){
        let a = roads[i][0];
        let b = roads[i][1];
        maximumImportance = maximumImportance + values[a] + values[b];
    }
    return maximumImportance;
}