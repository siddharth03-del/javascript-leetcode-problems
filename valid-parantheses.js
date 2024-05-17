class stack{
    #arr;
    constructor(){
        this.#arr = [];
    }
    push(element){
        this.#arr.push(element);
    }
    top(){
        return this.#arr[this.#arr.length - 1];
    }
    pop(){
        return this.#arr.pop();
    }
    isEmpty(){
        if(this.#arr.length == 0){
            return true;
        }
        else{
            false;
        }
    }
}
var isValid = function(s){
    let obj = new stack();
    let i;
    for(i of s){
        if(i == "(" || i == "{" || i == "[" ) {
            obj.push(i);
        }
        else{
            if( i == ")"){
                if(obj.pop() == "("){
                    continue;
                }
                else{
                    return false;
                }
            }
            else if( i == "}"){
                if(obj.pop() == "{"){
                    continue;
                }
                else{
                    return false;
                }
            }
            else if( i == "]"){
                if(obj.pop()== "["){
                    continue;
                }
                else{
                    return false;
                }
            }
        }
    }
    if(obj.isEmpty() == true){
        return true;
    }
    else{
        return false;
    }
}