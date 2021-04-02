import React, {useState} from 'react';
import List from './List';
import './Form.css';
import {v4 as uuidv4} from 'uuid'


function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 0){
            setInputValue("");
            setTodos([...todos, {id: uuidv4(), name: inputValue}]);
            console.log(todos);
        }
        
    }

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

  return (
      <div>
        <form className="Form" onSubmit={handleSubmit}>
        <input className='SearchBar' onChange={handleInput} value={inputValue}></input>
        </form>
        <List todos={todos} onUpdate={setTodos}/>
      </div>
  );
}

export default Form;
