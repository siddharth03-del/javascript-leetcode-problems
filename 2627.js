let test=true;
let cancel=true;
let clearId;
function debounce(fn,t){
    return function(inputs){
        if(test){
            startTime=Date.now();
        }
        test=false;
        if(cancel){
            cancel=false;
            clearId=setTimeout(
                ()=>{
                cancel=true
                return fn(inputs)
            },t
            )
        }
        else{
            clearTimeout(clearId)
            clearId=setTimeout(()=>{
                cancel=true;
                return fn(inputs)
            },t)
        }
    }
}