// Event delegation is based upon event bubbling.

// Instead of attaching event handlers to each child element, attach them directly to the parent element.

document.querySelector("#form").addEventListener('keyup', (e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined ){
        e.target.value = e.target.value.toUpperCase()
    }
})


// pros
// Saves a lot of memory
// Writing less code
// Dom Manipulation


// cons
// All the events are not bubbled up for eg blur, focus, resize etc
// cannot use stop propogation if you want event delegation to work
