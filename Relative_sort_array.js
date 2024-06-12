var relativeSortArray = function(arr1, arr2){
    let freq = {};
    let array = [];
    for(let i = 0; i < arr1.length; i++){
        if(freq[arr1[i]] == undefined){
            freq[arr1[i]] = 1;
        }
        else{
            freq[arr1[i]]++;
        }
    }
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < freq[arr2[i]]; j++){
            array.push(arr2[i]);
        }
        let a = arr2[i];
        delete freq[a];
    }
    for(let i of freq){
        for(let j = 0; j < freq[i]; j++){
            array.push(i);
        }
    }
    return array;
}
relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);