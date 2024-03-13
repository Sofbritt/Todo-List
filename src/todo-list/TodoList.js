import React, { useState } from 'react';
import './Todo.css';
import Todo from '../todo-props/Todo';


function TodoList() {

    const [todos, setTodos] = useState([]);
    const [inpValue, setInpValue] = useState('');

    const InputSubmit = (e) => {
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
                        onChange={InputSubmit}
                    />
                    <button className='send-btn' onClick={submit} >send</button>
                </form>
            </div>

            <div >
                {
                    todos.map((todo) => (

                        <Todo todo={todo} remove={remove} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList;