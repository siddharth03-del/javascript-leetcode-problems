class stack{
    #arr;
    constructor(){
        this.#arr = [];
    }
    push(element){
        this.#arr.push(element);
    }
    top(){
        if(this.#arr.length == 0){
            return null;
        }
        else{
            return this.#arr[this.#arr.length - 1];
        }
    }
    pop(element){
        this.#arr.pop();
    }
}
var removeStars = function(s){
    let mystack = new stack();
    let i = 0;
    for(i; i < s.length ; i++){
        if( s[i] != "*"){
            mystack.push(s[i]);
        }
        else{
            mystack.pop();
        }
    }
    let newstring = "";
    while(mystack.top() != null){
        let h = mystack.top();
        newstring = newstring + h.toString();
        mystack.pop();
    }
    let j = newstring.length - 1;
    let k = 0;
    s = "";
    for(j; j >= 0 ; j--){
        s = s + newstring[j];
    }
    return s;
}
console.log(removeStars("erase*****"));
