class Trie {
    constructor(){
        this.root = {};
    }
    
    insert(word){
        let node = this.root;
        
        for(let i = 0; i< word.length; i++){
            const c = word[i];
            
            if(!node[c])
                node[c] = {};
            
            node = node[c];
        }
        
        node.end = true;
    }
    
    search(word){
        let node = this.root;
        for (let i = 0; i < word.length; i++){
            if(!node[word[i]]) return false;
            
            node = node[word[i]];
        }
        
        return !!node.end;
    }
    
    startsWith(prefix){
        let node = this.root;
        for (let i = 0; i < prefix.length; i++){
            if(!node[prefix[i]]) return false;
            
            node = node[prefix[i]];
        }
        
        return true;
    }
}
