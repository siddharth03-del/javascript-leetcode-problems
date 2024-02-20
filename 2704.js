function expect(val){
    return {
        toBe:function (val1){
            if(val1===val){
                return true;
            }
            else{
                throw "Not Equal";
            }
        },
        notToBe:function(val1){
            if(val1!==val){
                return true;
            }
            else{
                throw "Equal"
            }
        }
    }
}
() => expect(5).toBe(5)
