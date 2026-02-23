import { useState } from "react";
export default function Search(){
    const [find,setfind]=useState("");
    const name=["Ayush","Anshul","Sanya","Anshul","Ayushman"];
    const student= name.filter((item)=>item.toLowerCase().includes(find.toLowerCase()));
    return(
        <>
        <h2>Search Component</h2>
        <input type="text" 
        placeholder="Enter key to Search"
        value={find}
        onChange={(e)=> setfind(e.target.value)}/> 
        <ul>
            {student.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        </>
    )
}