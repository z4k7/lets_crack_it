// SHALLOW CLONING

var obj1 = {
    a:1,
    b:2,
    c:{
        name:'Raman',
        age: 32
    }
}


var obj2 = {...obj1}

obj1.d = 47

obj1.c.name= 'Krishnan'

console.log(obj1,obj2);