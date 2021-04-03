import React from 'react';
import '../css/List.scss';

function List({ todos, onUpdate }) {

  const deleteItem = (id) => {
    window.localStorage.setItem('todos', JSON.stringify(todos.filter(e => e.id !== id)));
    onUpdate(todos.filter(e => e.id !== id));
  }

  return (
    <div className="List">
        <ul>
            {todos.map((todo) => ( 
                <li>{todo.name}<i class="fas fa-trash-alt" onClick={() => deleteItem(todo.id)}></i></li>
            ))}
        </ul>
    </div>
  );
}

export default List;
