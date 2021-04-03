import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './css/App.scss';

function App() {
  if(window.localStorage.getItem('todos') === null) {
    window.localStorage.setItem('todos', JSON.stringify([]));
  }
  const localStorage = JSON.parse(window.localStorage.getItem('todos'));
  const [todos, setTodos] = useState(localStorage);
  return (
    <div className="App">
      <div className="container">
        <div className="inner-container">
          <Form todos={todos} setTodos={setTodos} />
          <List todos={todos} onUpdate={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
