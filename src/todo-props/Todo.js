import React from "react";
import { BsBackspace } from "react-icons/bs";


function Todo(props) {


    

    return (
        <div>
           
                    <div className='todos'>
                        <span>{props.todo} </span>

                        <BsBackspace className='remove-icon'
                            onClick={props.remove} />

                    </div>
               
        </div>
    )
}

export default Todo;