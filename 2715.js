const canceltimems=50;
function cancellable(fn,args,t){
    let cancel=false;
    function cancelFn(){
        console.log("cancelled");
    }
    let promise=new Promise((resolve,reject)=>{
        if(canceltimems>t){
            cancel=true;
            resolve(...args)
        }
        else{
            reject(args)
            return cancelFn;
        }
    })
    promise.then(fn,cancelFn)
    if(cancel){
        return {"time":t,"returned":fn(args)}
    }
    
}
console.log(cancellable((x)=>{return 2*x},[4],10))
