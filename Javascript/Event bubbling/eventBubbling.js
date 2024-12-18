 document.querySelector("#grandParent").addEventListener('click',() => {
    console.log("Grandparent Clicked!");
 },false)
 //true => Capturing, false => Bubbling

 document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("Parent Clicked!");
    e.stopPropagation()
 },false)


 document.querySelector("#child").addEventListener('click', ()=>{
    console.log("Child Clicked!");
 },false)


