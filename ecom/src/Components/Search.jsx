import { useState } from "react";
export default function Search(){
    const [find,setfind]=useState("");
    const name=["Iphone","Laptop","Charger"];
    const student= name.filter((item)=>item.toLowerCase().includes(find.toLowerCase()));
    return(
        <>
        <div className="navbar">
        <div className="logo">
        🛒MyStore
        </div>
        <input type="text" 
        placeholder="Enter key to Search"
        value={find}
        onChange={(e)=> setfind(e.target.value)}/> 
        <ul>
            {student.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        </div>
        </>
    )
}