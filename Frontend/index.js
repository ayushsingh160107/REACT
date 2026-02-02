// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log("Even Number are: "+arr[i]);
//     }else{
//         console.log("Odd Number");
//     }
// }
// const person={key: "Hello"};
// console.log(person.key);
// person.key="Bye";
// console.log(person.key);

// const arr=["HTML","CSS","JavaScript"];
// arr.push("Python");
// console.log(arr);

// const Sales="Toyota";
// function carType(name){
//     return name==="Honda"?name:"Sorry we dont sell this car";
// }

// const car={carn:"City",getCar:carType("Honda"),Special:Sales}
// console.log(car.carn);
// console.log(car.getCar);
// console.log(car.Special);


const color=["Red","Blue","Green"];
color.forEach((i)=>console.log(i));

// let arr=[1,2,3,4,5];
// arr.forEach((i,a)=>console.log(arr[a]=i+3));

for(const i in color){    // for indexes
    console.log(i,color[i]);
}
let arr=[1,2,3,4,5];
for(const i in arr){
    console.log(i,arr[i]+3);
}

// const user={name:"Rabins",age:25,Hobby:"Coding"};
// for(const i in user){
//     console.log(i,user[i]);
// }

const language=["HTML","CSS","JavaScript"];
for(const i of language){   //for values
    console.log(i);
}
