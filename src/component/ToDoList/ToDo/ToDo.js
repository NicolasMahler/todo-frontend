import React, { useState } from 'react';
import './ToDo.css';

function ToDo({todo, onChange, onDelete, style, onCompleted}) {

    const [text, setText] = useState(todo.todo);
    const [completed, setCompleted] = useState(todo.completed);

    const completedOnChange = (event) => {
        setCompleted(event.target.checked);
        onCompleted(todo.id, event.target.checked, text);
    }

    const textOnChange = (event) => {
        onChange(event.target.value, completed, todo.id);
        setText(event.target.value);
    }

    return (
        <form className="todo__container" style={style}>
            <input hidden 
                type="checkbox" 
                name={"complete" + todo.id} 
                className="todo__complete" id={"complete" + todo.id} 
                onChange={completedOnChange} 
                checked={completed} />
            <label className="todo__label" htmlFor={"complete" + todo.id}></label>
            <div className="todo__strikeThrough">
                <input className="todo__textInput" 
                    type="text" 
                    name="todo-text" 
                    id={"text" + todo.id} 
                    onChange={textOnChange}     
                    value={text} />
            </div>
            <i className="fa fa-trash todo__delete" onClick={() => onDelete(todo.id)}></i>
        </form>
    )

}

export default ToDo;