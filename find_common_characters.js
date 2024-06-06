var commonChars = function(words){
    let globalfreq = new Map();
    for(let i = 0; i < words[0].length; i++){
        if(globalfreq.get(words[0][i]) == undefined){
            globalfreq.set(words[0][i], 1);
        }
        else{
            let k = globalfreq.get(words[0][i]);
            k++;
            globalfreq.set(words[0][i], k);
        }
    }
    for(let i = 1; i < words.length; i++){
        let localfreq = new Map();
        for(let j = 0; j < words[i].length; j++){
        if(localfreq.get(words[i][j]) == undefined){
            localfreq.set(words[i][j], 1);
        }
        else{
            let k = localfreq.get(words[i][j]);
            k++;
            localfreq.set(words[i][j], k);
        }
    }
    for(let l of globalfreq.keys()){
        if(localfreq.get(l) == undefined){
            globalfreq.delete(l);
        }
        else if(globalfreq.get(l) > localfreq.get(l)){
            globalfreq.set(l, localfreq.get(l));
        }
    }
    }
    let result = [];
    for(let i of globalfreq.keys()){
        let loop = globalfreq.get(i);
        for(let j = 0; j < loop; j++){
            result.push(i);
        }
    }
    return result;
}