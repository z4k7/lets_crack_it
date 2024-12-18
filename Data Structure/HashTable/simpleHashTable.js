/* Here I'm using different hash function*/

class SimpleHash{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let char of key){
            total += key.charCodeAt(char)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        this.table[index]=value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        let index = this.hash(key)
        this.table[index] == undefined
    }

    display(){
        for(let i = 0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new SimpleHash(50)
table.set("name","Bruce")
table.set("age",25)
table.display()


console.log(table.get("name"));

table.set("mane","Clark")
table.display()