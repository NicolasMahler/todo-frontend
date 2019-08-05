import React, { useState } from 'react';
import ToDoStore from '../../../../store/ToDos/ToDoStore';
import { useDispatch } from 'react-redux';
import './CreateToDo.css';

function CreateToDo() {

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const createToDo = () => {
        if (text !== '') {
            setText('');
            dispatch(ToDoStore.createToDo(localStorage.getItem('token'), text));
        }
    }

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            createToDo();
        }
    }

    return (
        <div className="createToDo">
            <input 
                className="createToDo__input" 
                placeholder="Create New Todo" 
                type="text" 
                value={text} 
                onChange={(e) => {setText(e.target.value)}}
                onKeyUp={onEnterPress} />
            <i className="fa fa-plus createToDo__button" aria-hidden="true" onClick={createToDo}></i>
        </div>
    )
}

export default CreateToDo;