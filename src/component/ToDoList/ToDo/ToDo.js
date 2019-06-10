import React, { useState } from 'react';
import './ToDo.css';

function ToDo({todo, onChange, onDelete}) {

    const [text, setText] = useState(todo.todo);
    const [completed, setCompleted] = useState(todo.completed);
    const [edit, setEdit] = useState(false);

    const completedChange = (event) => {
        setCompleted(event.target.checked);
    }

    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const editOnChange = (event) => {
        if (!event.target.checked) {
            onChange(event);
        }
        setEdit(event.target.checked);
    }

    return (
        <form className="todo__container">
            <input type="checkbox" name="completed" id="completed" onChange={completedChange} value={completed} hidden />
            {completed ?
                <label htmlFor="completed" className="todo__label"><i className="fa fa-check"></i></label> :
                <label htmlFor="completed" className="todo__label"><i className="fa fa-times"></i></label>
            }
            <input className="todo__textInput" type="text" name="todo" id="todo" onChange={textOnChange} value={text} disabled={!edit} />
            <input type="checkbox" name="edit" id="edit" value={edit} onChange={editOnChange} hidden />
            {edit ? 
                <label htmlFor="edit" className="todo__label"><i className="fa fa-save"></i></label> : 
                <label htmlFor="edit" className="todo__label"><i className="fa fa-edit"></i></label>
            }
            <button className="todo__delete" type="button" onClick={onDelete}><i className="fa fa-trash"></i></button>
        </form>
    )

}

export default ToDo;