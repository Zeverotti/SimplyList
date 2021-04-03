import React, {useState} from 'react';
import '../css/Form.scss';
import {v4 as uuidv4} from 'uuid'


function Form({ todos, setTodos }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 0){
            setInputValue("");
            const toInsert = [...todos, {id: uuidv4(), name: inputValue}];
            window.localStorage.setItem('todos', JSON.stringify(toInsert));
            setTodos(toInsert);
        }
        
    }

    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <form className="Form" onSubmit={handleSubmit}>
        <input className='SearchBar' onChange={handleInput} value={inputValue}></input>
    </form>
  );
}

export default Form;
