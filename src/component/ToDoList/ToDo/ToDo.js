import React, { useState } from 'react';
import './ToDo.css';

function ToDo({todo, onChange, onDelete, style, onCompleted}) {

    const [text, setText] = useState(todo.todo);
    const [completed, setCompleted] = useState(todo.completed);
    const [edit, setEdit] = useState(false);

    const completedOnChange = (event) => {
        setCompleted(event.target.checked);
        onCompleted(todo.id, event.target.checked);
    }

    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const editOnChange = (event) => {
        if (!event.target.checked) {
            onChange(text, completed, todo.id);
        }
        setEdit(event.target.checked);
    }

    return (
        <form className="todo__container" style={style}>
            <input contentEditable className="todo__textInput" type="text" name="todo" id={"todo" + todo.id} onChange={textOnChange} value={text} disabled={!edit}/>
        </form>
    )

}

export default ToDo;