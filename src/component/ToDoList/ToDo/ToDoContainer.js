import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoStore from '../../../store/ToDos/ToDoStore';
import { useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';

const ToDoContainer = ({todo, updateToDo, deleteToDo}) => {

    const dispatch = useDispatch();
    const [transition, setTransition] = useState(false);
    const token = localStorage.getItem('token');
    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    useEffect(() => {
        setTransition(true);
    }, []);

    const onChange = (todo, completed, id) => {
        dispatch(ToDoStore.updateToDo(token, {todo, completed, id}));
    }
    
    const onDelete = () => {
        setTransition(false);
        setTimeout(() => dispatch(ToDoStore.deleteToDo(token, todo.id)), 500);
    }

    const onCompleted = (id, completed, todo) => {
        dispatch(ToDoStore.updateToDo(token, { id, completed, todo }));
    }

    return (
        <Transition in={transition} timeout={0}>
            {state => (
                <ToDo todo={todo} onCompleted={onCompleted} onDelete={onDelete} onChange={onChange} style={{...transitionStyles[state]}} />
            )}
        </Transition>
    )

};

export default ToDoContainer;