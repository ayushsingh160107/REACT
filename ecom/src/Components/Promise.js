// let Promise=new Promise((resolve,reject)=>{
//     if(success){
//         resolve("Promise is resolved");
//     }else{
//         reject("Promise is rejected");
//     }
// });

import { useEffect } from "react";

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data.map(element => {
    return element.name;
})))
.catch(error => console.error(error));

axios.get("https://jsonplaceholder.typicode.com/users")
.then(data=>console.log(data))
.catch(error=>console.log(error));

