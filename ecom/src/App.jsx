import { useState } from "react";
import "h8k-components";
import "./App.css";

function App() {

  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAddBook = () => {
    const value=input.trim();
    if(input===""){
      setError("Item cannot be empty")
      return;
    }

    const exists=book.some(
      book=>book.title.toLowerCase()==value.toLowerCase()
    );

    if(exists){
      setError("Value already exixts");
      return;
    }
    const newBook={
      title: value,
      completed:false 
    };
    setBooks([...books],newBook);
    setInput("");
    setError("");
  };

  const handleDelete = (index) => {
    const updated=book.filter((_,i)=>i!=index);
    setBooks(updated);
  };

  const toggleStatus = (index) => {
    const updated=[...books];
    updated[index].completed!=updated[index].completed;
    setBooks(updated);
  };

  return (
    <div className="App">

      <h8k-navbar header="Book Reading Tracker"></h8k-navbar>

      <input
        type="text"
        placeholder="Enter book title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAddBook}>Add Book</button>

      {error && <p>{error}</p>}

      <ul>
        {books.map((book, index) => (
          <li key={index}>

            {book.title} - {book.completed ? "Completed" : "Reading"}

            <button onClick={() => toggleStatus(index)}>
              {book.completed ? "Mark Reading" : "Mark Completed"}
            </button>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}
export default App;
