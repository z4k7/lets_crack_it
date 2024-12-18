/* 
HASH TABLE

=> A hash table, also known as hash map, is a data structure that is used to store key-value pairs.

=> Given a key, you can associate a value with that key for very fast lookup.

=> javaScripts's Object is a special implementation of the hash table data structure.
   However, Object class adds its own keys. Keys that you input may conflict and overwrite
   the inherited default properties.

=> Maps which were introduced in 2015 allow you to store key-value pairs.

=> Writing your own hash table implementation is a very popular JavaScript interview question.

=> A hashing function accepts the string key, converts it into a hash code using a defined logic
   and then maps it into a numeric index that is within the bounds of the array.

=> Using the index, we store the value

=> The same hashing function is reused to retrieve the value given a key.

*/


class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        // this.table[index]= value

        const bucket = this.table[index]
        if(!bucket){
            this.table[index] =[[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0]=== key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0]=== key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }


    remove(key){
        let index = this.hash(key)
        // this.table[index]= undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display(){
        for(let i =0 ; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
table.set("name","Bruce")
table.set("age",25)
table.display()


console.log(table.get("name"));

table.set("mane","Clark")
table.display()