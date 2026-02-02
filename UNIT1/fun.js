// (function show(){
//     console.log("Welcome to CSB");
// // })(); // IIFE Immediately Invoked Function Expression        
// (() => {
//     console.log("Welcome");
// })();
// function person(){
//     this.age=25;
//     setTimeout(function(){
//         console.log(this.age);
//     },1000);
// };
// new person();
function person(){
    this.age=25;
    setTimeout(()=>{
        console.log(this.age);
    },1000);
}
person();