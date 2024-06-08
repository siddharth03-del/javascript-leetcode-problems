var Trie = function(){
    this.root = new node(null, false);
}
var node = function(val, terminal){
    this.val = val;
    this.isTerminal = terminal;
    this.children = {};
}
Trie.prototype.insert = function(word){
    let current = this.root;
    let n;
    for(let i = 0; i < word.length; i++){
        if(current.children[word[i]] == undefined){
            if(i == word.length - 1){
                n = new node(word[i], true);
            }
            else{
                n = new node(word[i], false);
            }
            current.children[word[i]] = n;
            current = current.children[word[i]];
        }
        else{
            if(i == word.length - 1){
                current = current.children[word[i]];
                current.isTerminal = true;
            }
            else{
                current = current.children[word[i]];
            }
        }
    }
    return;
}
Trie.prototype.search = function(word){
    let current = this.root;
    for(let i = 0; i < word.length; i++){
        if(current.children[word[i]] == undefined){
            return false;
        }
        else{
            current = current.children[word[i]];
        }
    }
    let check = current.isTerminal;
    if(check){
        return true;
    }
    else{
        return false;
    }
}
Trie.prototype.startsWith = function(prefix){
    let current = this.root;
    for(let i = 0; i < prefix.length; i++){
        if(current.children[prefix[i]] == undefined){
            return false;
        }
        else{
            current = current.children[prefix[i]];
        }
    }
    return true;
}
var obj 