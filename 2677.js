function chunk(arr,size){
    let temparray=[]
    let returnarray=[]
    var count=0;
    var index=0;
    if(arr.length==0){
        return returnarray
    }
    for(var i of arr){
        if(count!=size){
            temparray.push(i);
            count++;
            index++;
        }
        else{
            count=0;
            returnarray.push(temparray);
            temparray=[]
            temparray.push(i);
            index++;
            count++;
        }
        if(index==arr.length){
            returnarray.push(temparray);
            return returnarray;
        }
    }
    
}
console.log(chunk([1,2,3,4,5,6,7,8,9,10],2))