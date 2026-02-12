// function add(...numbers){
//     let sum = 0;
//     for (let i in numbers){
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(add(1,2,3,5,6,6,7,7,7,7,77));

// let a=[1,2,3,34,65,43];
// let [first,second,...rest]=a;
// console.log(first);
// console.log(second);
// console.log(...rest);

// let arr=[1,2,3,4,5];
// let arr2=[...arr];
// console.log(arr2);

const isEven = a => {
    return (a % 2 === 0) ? "Even" : "Odd";
}
console.log(isEven(5));
const reverseString = str => {
    return str.split("").reverse().join("");
}
console.log(reverseString("Ayush"));
const avgMarks= (...marks) => {
    let sum = 0;    
    for(let i in marks){
        sum =sum+marks[i];
    }
    const avg = sum/marks.length;
    return (avg>=40)?"Pass":"Fail";
}
console.log(avgMarks(90,80,70,60,50));