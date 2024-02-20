function createcounter(init){
    return {
        init1:init,
        increment:()=>{
            return ++init;
        },
        decrement:()=>{
            return --init;
        },
        reset:function(){
            init=this.init1;
            return this.init1;
        }
    }
}
counter=createcounter(5);
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
