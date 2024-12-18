// STACK MEMORY
// STACK IS USED TO STORE LOCAL VARIABLES.
// LIFE OF STACK ENDS WHEN THE FUNCTION IS RETURNED.

// HEAP MEMORY
// HEAP IS USED TO STORE OBJECTS, ARRAYS ETC WHICH ARE GENERALLY HUGE IN SIZE.
// LIFE OF HEAP IS PERSISTANT UNTIL THE VARIABLE IS CLEARED.
// ---------------------------------------------------------------------------------------------------------

// CLOSURE

// function add(a,b){
//     function myAdd(){
//         const c = a + b
//         return c
//     }

//     return myAdd
// }

// function main(){
//     const res = add(3,4)
//     const val = res()
//     console.log(val);
// }

// main()

// ---------------------------------------------------------------------------------------------------------
// FOREACH

// function main(a){
// [1,2,3,4,5,6,7]
// .forEach(function(i){
//     console.log(i,a)
// })
// }

// main(10)

// here the function inside foreach is still accessing 'a' from the outerfunction which is due to closure

// ---------------------------------------------------------------------------------------------------------

// USECASE OF CLOSURE

// var objs =[
//     {
//         name:'One',
//         msg:'Hello, I am one'
//     },
//     {
//         name:'Two',
//         msg:'Hello, I am two'
//     },
//     {
//         name:'Three',
//         msg:'Hello, I am three'
//     },
// ]

// function main(){
//     objs.forEach((item)=>{
//         const bt = document.createElement('button');
//         bt.innerHTML = item.name;
//         bt.onclick = getCallback(item.msg);
//         document.body.appendChild(bt)
//     })
// }

// function getCallback(arg){

//    return function(){
//         alert(arg)
//     }
// }


// main()