/*
===========================================================
ES6 LMS Coding Assignment
Course: Web Technology / JavaScript ES6

Instructions:
1. DO NOT change function names
2. DO NOT modify the driver() function
3. Implement logic only inside the marked sections
4. Use ES6 features wherever required
===========================================================
*/


// ------------------ Dummy Data ------------------

const numbers = [-4, 6, 10, 45, 8, 9];

const person = {
  name: "Rohit",
  id: 20,
  age: 19,
  course: "B.Tech",
  address:{
    city:"Mumbai",
    state:"MP"
  }
};

const contact = {
  email: "rohit@gmail.com",
  phone: "XXXXXXX"
};


// =================================================
// Q1
// Using arrow functions and array methods,
// return a new array containing squares of ONLY
// positive numbers from the given array.
// =================================================
function positiveSquares(arr){

  // WRITE YOUR CODE HERE
  return arr.filter(n => n > 0).map(n => n * n);

}


// =================================================
// Q2
// Using array destructuring,
// return the sum of the first, second and last element
// of the array.
// =================================================
function specialSum(arr){

  // WRITE YOUR CODE HERE
  const [first, second, ...rest] = arr;
  const last = rest[rest.length - 1];
  return first + second + last;

}


// =================================================
// Q3
// Using object destructuring,
// return string:
// "Rohit (rohit@gmail.com) from Mumbai is studying B.Tech"
// =================================================
function studentDescription(p){

  // WRITE YOUR CODE HERE
  const {name, course, address:{city}} = p;
  const {email} = contact;
  return `${name} (${email}) from ${city} is studying ${course}`;

}


// =================================================
// Q4
// Using template literals,
// generate a formatted student ID string:
// Example: "STU-20-Rohit"
// =================================================
function generateStudentCode(p){

  // WRITE YOUR CODE HERE
  const {id, name} = p;
  return `STU-${id}-${name}`;

}


// =================================================
// Q5
// Using rest operator,
// return the difference between the largest and
// smallest value from all parameters.
// =================================================
function range(...nums){

  // WRITE YOUR CODE HERE
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return max - min;

}


// =================================================
// Q6
// Using spread operator,
// merge person and contact into a new object and
// add property status : "ACTIVE"
// =================================================
function buildStudentProfile(p,c){

  // WRITE YOUR CODE HERE
  return {
    ...p,
    ...c,
    status: "ACTIVE"
  };

}


// =================================================
// Q7
// Demonstrate lexical 'this' using an arrow function.
//
// Create an object inside the function with a method
// that uses an arrow function to access `this.name`.
//
// The function should return:
// "Hello Rohit"
// =================================================
function lexicalDemo(obj){

  // WRITE YOUR CODE HERE
  const student = {
    name: obj.name,
    greet(){
      const sayHello = () => `Hello ${this.name}`;
      return sayHello();
    }
  };
  return student.greet();

}


// =================================================
// Q8
// Using default parameters and arrow function,
// multiply each number in array by multiplier.
// Default multiplier = 3.
// =================================================
function scaleNumbers(arr, multiplier = 3){

  // WRITE YOUR CODE HERE
  return arr.map(n => n * multiplier);

}


// =================================================
// Q9
// Create a Promise that resolves or rejects AFTER 2 seconds.
//
// If sum of numbers > 50 → resolve with message:
// "Large dataset"
//
// Otherwise → reject with message:
// "Dataset too small"
//
// Use setTimeout to simulate async delay.
// =================================================
function analyzeDataset(arr){

  // WRITE YOUR CODE HERE
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const sum = arr.reduce((a,b)=>a+b,0);
      if(sum > 50){
        resolve("Large dataset");
      }else{
        reject("Dataset too small");
      }
    },2000);
  });

}


// =================================================
// Q10
// Consume analyzeDataset() using then() and catch().
//
// Call analyzeDataset(arr) and:
// - convert the final message to UPPERCASE
// - print the message using console.log()
//
// The output should appear AFTER the 2-second delay.
// =================================================
function processDataset(arr){

  // WRITE YOUR CODE HERE
  analyzeDataset(arr)
    .then(res => console.log(res.toUpperCase()))
    .catch(err => console.log(err.toUpperCase()));

}

// =================================================
// DRIVER FUNCTION (DO NOT MODIFY)
// =================================================
function driver(){

  console.log("Q1:", positiveSquares(numbers));

  console.log("Q2:", specialSum(numbers));

  console.log("Q3:", studentDescription(person));

  console.log("Q4:", generateStudentCode(person));

  console.log("Q5:", range(3,8,2,15,7));

  console.log("Q6:", buildStudentProfile(person,contact));

  console.log("Q7:", lexicalDemo(person));

  console.log("Q8:", scaleNumbers(numbers));

  analyzeDataset(numbers)
    .then(res=>console.log("Q9:",res))
    .catch(err=>console.log("Q9:",err));

  processDataset(numbers);
}


driver();