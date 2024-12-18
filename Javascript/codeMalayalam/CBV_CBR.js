// CALL BY VALUE & CALL BY REFERENCE

// VARIABLE

// function one(){
//     var a =100
//     two(a)
//     console.log('one',a);
// }

// function two(a){
//     a = a + 1
//     console.log('two',a);
// }

// one()

// ------------------------------------------------------------------------------------------------------------
// OBJECT

// function one(){
//     var a = {
//         value:100
//     }

//     two(a)
//     console.log('one',a.value);
// }

// function two(a){
//     a.value = a.value + 1
//     console.log('two',a.value);
// }

// one()

// ------------------------------------------------------------------------------------------------------------

// ARRAY

// function one(){
//     var a = [100]

//     two(a)
//     console.log('one',a[0]);
// }

// function two(a){
//     a[0] = a[0] + 1
//     console.log('two',a[0]);
// }

// one()

// ------------------------------------------------------------------------------------------------------------
// EXCEPTION

// function one(){
//     var a = {
//         value:100
//     }

//     two(a)
//     console.log('one',a.value);
// }

// function two(a){
//     a = {
//         value:400
//     }
//     console.log('two',a.value);
// }

// one()


// THIS PHENOMENON IS DUE TO STACK AND HEAP MEMORY
// VARIABLES ARE STORED IN STACK MEMORY AS THEY HAVE ONLY SMALL SIZE
// BUT OBJECTS AND ARRAYS ARE STORED IN HEAP MEMORY AS THEY CAN CONTAIN LARGE SIZE DATA
// ONLY THE REFERENCE OF OBJECTS AND ARRAYS ARE STORED IN THE STACK MEMORY.

// THE STACK MEMORY WILL BE CLEARED ONCE THE FUNCTION IS CLOSED