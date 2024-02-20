var compose=function (functions){
    if(functions.length==0){
        return function(x){
            return x;
        }
    }
    return function(x){
        let result=x;
        for(var i=functions.length-1; i>=0; i--){
            result=functions[i](result);
        }
        return result;
    }
}
console.log(function1([x => x + 1, x => x * x, x => 2 * x])(2))