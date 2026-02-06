const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout   
});
// r1.question("Enter something: ",(ans)=> {
//     console.log("You entered: ",ans);
//     r1.close();
// });

// r1.question("Enter Number 1: ",(a)=>{
//     r1.question("Enter Number 2: ",(b)=>{
//         const calculator=()=>({
//             add: (a,b)=>a+b,
//             sub:(a,b)=>a-b,
//             mul:(a,b)=>a*b,
//             div:(a,b)=>(b===0?"Error":a/b),
//         })
//         console.log("Addition: ",calculator().add(a,b));
//         console.log("Subtraction: ",calculator().sub(a,b));
//         console.log("Multiplication: ",calculator().mul(a,b));
//         console.log("Division: ",calculator().div(a,b));
//         r1.close();
//     });
// });

r1.question("Enter operation: ",(op)=>{
    r1.question("Enter Number 1: ",(a)=>{
        r1.question("Enter Number 2: ",(b)=>{
            switch(op){
                case 1:
                    add:(a,b)=>a+b;
                    console.log("Addition: ",add(a,b));
                    break;
                case 2:
                    sub:(a,b)=>a-b;
                    console.log("Subtraction: ",sub(a,b));
                    break;
                case 3:
                    mul:(a,b)=>a*b;
                    console.log("Multiplication: ",mul(a,b));
                    break;
                case 4:
                    div:(a,b)=>(b===0?"Error":a/b);
                    console.log("Division: ",div(a,b));
                    break;
                default:
                    console.log("Invalid operation");        
            }
        r1.close();
    });
});
});
