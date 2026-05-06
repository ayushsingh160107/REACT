import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../slicer/action';

const Todo = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos || []); //to select the state from the store
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!input.trim()) return;
    dispatch(addTodo(input.trim()));
    setInput('');
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
    
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: '12px'
            }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)} style={{ marginLeft: '8px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;