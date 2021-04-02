import React, {useState} from 'react';
import Form from './Form';


function List({ todos, onUpdate }) {

  const elimineit = (id) => {
      onUpdate(todos.filter(e => e.id!=id));
  }

  return (
    <div className="List">
        <ul>
            {todos.map((todo) => ( 
                <li>{todo.name}<span style={{marginLeft: '160px', cursor: 'pointer'}} onClick={() => elimineit(todo.id)}>x</span></li>
            ))}
        </ul>
    </div>
  );
}

export default List;
