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
        // let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.downheapify(0);
        // return temp;
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
var restoreMatrix = function(rowSum, colSum){
    let rowHeap = new Heap((lhs, rhs)=>lhs[1] < rhs[1]);
    let colHeap = new Heap((lhs, rhs)=>lhs[1] < rhs[1]);
    let m = rowSum.length;
    let n = colSum.length;
    let res = Array(m).fill(-1).map(()=>Array(n).fill(-1));
    // let res = new Array(m).fill([]);
    let colcheck = {};
    let rowcheck = {};
    for(let i = 0; i < m; i++){
        let arr = [i, rowSum[i]];
        rowHeap.insert(arr);
        rowcheck[i] = true;
    }
    for(let i = 0; i < n; i++){
        let arr = [i, colSum[i]];
        colHeap.insert(arr);
        colcheck[i] = true;
    }
    while(Object.keys(colcheck).length != 0 && Object.keys(rowcheck).length != 0){
        let col = colHeap.get();
        let row = rowHeap.get();
        console.log(row, col);
        // colHeap.display();
        // rowHeap.display();
        if(col[1] < row[1]){
            let index = col[0];
            colHeap.delete();
            if(colcheck[index]){
                console.log(col, "columns");
                delete colcheck[index];
                if(Object.keys(colcheck).length == 0){
                    rowcheck = {};
                }
                for(let i = 0; i < m; i++){
                    if(res[i][index] == -1){
                        res[i][index] = col[1];
                        let new1 = rowSum[i] - col[1];
                        rowSum[i] = new1;
                        for(let j = i+1; j < m; j++){
                            if(res[j][index] == -1){
                                res[j][index] = 0;
                            }
                        }
                        console.log([i,new1]);
                        rowHeap.insert([i, new1]);
                        break;
                    }
                }
            }
            else{
                // colHeap.delete();
                continue;
            }
        }
        else{
            let index = row[0];
            rowHeap.delete();
            if(rowcheck[index]){
                console.log(row, "rows");
                delete rowcheck[index];
                if(Object.keys(rowcheck).length == 0){
                    colcheck = {};
                }
                for(let i = 0; i < n; i++){
                    if(res[index][i] == -1){
                        res[index][i] = row[1];
                        for(let j = i + 1; j < n; j++){
                            if(res[index][j] == -1){
                                res[index][j] = 0;
                            }
                        }
                        let new1 = colSum[i] - row[1];
                        colSum[i] = new1;
                        console.log([i,new1]);
                        colHeap.insert([i, new1]);
                        break;
                    }
                }
            }
            else{
                // rowHeap.delete();
                continue;
            }
        }
    }
    return res;
}