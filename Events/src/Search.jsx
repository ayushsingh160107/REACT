import { useState } from "react";
export default function Search(){
    const [find,setfind]=useState("");
    const name=["Ayush","Anshul","Sanya","Anshul","Ayushman"];
    const student= name.filter(n=>n.toLowerCase().includes(find.toLowerCase()));
    return(
        <>
        <h1>Search Component</h1>
        <input type="text" 
        placeholder="Enter key to Search"
        value={find}
        onChange={(e)=>setFind(e.target.value)}/>
        </>
    )
}