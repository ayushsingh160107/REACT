const student={
    name:"Ayush",
    age:33,
    address:{
        city:"Gzb",
        state:"UP"
    }
}
// const name=student.name;
// const age=student.age;
// console.log(name,age);

// const {name,age}=student;
// console.log(name,age);

// const {name:stuname,age}=student;
// console.log(stuname,age);

// const {name:stuname="Amit",age, address:{city}}=student;
// console.log(stuname,age,city);

// function displaystu(object){
//     console.log(`My name is ${object.name} and age is ${object.age}`);
// }
// displaystu(student);

// let numbers=[1,2,3];
// let [a,b,c]=numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a,b,c);

let data=[1,2];
let [a=10,b=20]=data;
console.log(a);
console.log(b);

let p=5;
let q=10;
[p,q]=[q,p];
console.log(p);
console.log(q); 

let color=["Red","Green","Blue"];
let [,g]=color;
console.log(g);