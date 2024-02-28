import React, { useState } from 'react';
import { BsBackspace } from "react-icons/bs";
import './Todo.css';


function TodoList() {

    const [todos, setTodos] = useState([]);
    const [inpValue, setInpValue] = useState('');

    const InputOnchange = (e) => {
        setInpValue(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        setTodos([...todos, inpValue]);
        setInpValue('');
    }


    const remove = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='todo-div' >
            <div className='form' >
                <form >
                    <input
                        className='inp'
                        type='text'
                        placeholder='write your todo list...'
                        onChange={InputOnchange}
                    />
                    <button className='send-btn' onClick={submit} >send</button>
                </form>
            </div>

            <div >
                {
                    todos.map((todo) => (
                        <div className='todos' key={todo}  >
                            <li>{todo} </li>

                            <BsBackspace className='remove-icon'
                                onClick={remove} />

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList;