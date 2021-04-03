import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './css/App.scss';

function App() {
  if(window.localStorage.getItem('todos') === null) {
    window.localStorage.setItem('todos', JSON.stringify([]));
  }
  let localStorage;
  try {
    localStorage = JSON.parse(window.localStorage.getItem('todos'));
  } catch (error) {
    localStorage = [];
  }
  const [todos, setTodos] = useState(localStorage);
  const clearAll = () => {
    setTodos([]);
    window.localStorage.setItem('todos', JSON.stringify([]));
  }
  return (
    <div className="App">
      <div className="container">
        <div className="inner-container">
          <Form todos={todos} setTodos={setTodos} />
          <List todos={todos} onUpdate={setTodos} />
          {todos.length > 0 && (
            <p className="delete-all" onClick={clearAll}>clear all</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
