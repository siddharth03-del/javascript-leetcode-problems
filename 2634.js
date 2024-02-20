function filter(arr,fn){
    var resarr=[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            resarr.push(arr[i])
        }
    }
    return resarr;
}
console.log(filter([0,10,20,30],(x)=>{if(x>10){
    return true;
}}))