
import './App.css'
import EventToDo from './EventToDo'
import EventTodo from './EventToDo'
import Counter from './Counter'
import Search from './Search'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
  useEffect(()=>{console.log("Welcome")},[])
  useState(()=>{console.log("App component is rendered")})
  // useEffect(()=>{console.log("Count updated")},[count])
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then()
    .catch(error => console.error(error));
  }, []);
  return (
    <>
      
     {/* <EventToDo />
     <Search/>
     <Counter/>
     <h1>My App</h1> */}
    </>
  )
}
export default App