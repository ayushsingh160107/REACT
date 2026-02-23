// function greet(){
//     console.log("Welcome");
// }
// function execute(fn){
//     fn();
// }
// execute(greet);

const number=[1,2,3,4,5];
// const newnumber=number.map(function(num){
//     console.log(num*num);
// });

// const newnumber=number.map(num=>num*num);
// console.log(newnumber);

const newnum=number.filter((n)=>n%2==0);
console.log(newnum);

const n=