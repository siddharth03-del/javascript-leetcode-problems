var LRUCache = function(capcity){
    this.obj = new Map();
    this.size = capcity;
}
LRUCache.prototype.get = function (key){
    if(this.obj.get(key) == undefined){
        return -1;
    }
    else{
        let value = this.obj.get(key);
        this.obj.delete(key);
        this.obj.set(key, value);
        return value;
    }
}
LRUCache.prototype.put = function(key, value){
    if(this.obj.get(key) == undefined){
        if(this.obj.size == this.size){
            let firskey = this.obj.keys().next().value;
            this.obj.delete(firskey);
            this.arr.set(key,value);
        }
        else{
            this.obj.set(key,value);
        }
    }
    else{
        this.obj.delete(key);
        this.obj.set(key, value);
    }
}
