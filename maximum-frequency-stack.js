var FreqStack = function(){
    this.arr = [];
    this.obj = {};
    this.maxfrequency = 0;
}
FreqStack.prototype.push = function(val){
    this.arr.push(val);
    if(this.obj[val] == undefined){
        this.obj[val] = 1;
    }
    else{
        this.obj[val]++;
    }
    for(i in this.obj){
        if(this.maxfrequency < this.obj[i]){
            this.maxfrequency = this.obj[i];
        }
    }
}
FreqStack.prototype.pop = function(){
    let list = [];
    let max = 0;
    while(this.arr.length > 0){
        let ge = this.arr.pop();
        if(this.obj[ge] == this.maxfrequency){
            if(list.length == 0){
                this.obj[ge]--;
                for(i in this.obj){
                    if(max < this.obj[i]){
                        max = this.obj[i];
                    }
                }

                this.maxfrequency = max;
                return ge;
            }
            else{
                this.obj[ge]--;
                for(i in this.obj){
                    if(max < this.obj[i]){
                        max = this.obj[i];
                    }
                }
                this.maxfrequency = max;
                for(let i = list.length - 1; i >= 0; i--){
                    this.arr.push(list[i]);
                }
                return ge;
            }
        }
        else{
            list.push(ge);
        }
    }
}