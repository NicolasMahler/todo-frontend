import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoStore from '../../../store/ToDos/ToDoStore';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import { deleteToDo } from '../../../store/ToDos/function';

const ToDoContainer = ({todo, saveToDo, deleteToDo}) => {

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
    }, [])

    function onChange(todo, completed, id) {
        saveToDo(token, {todo, completed, id});
    }
    
    function onDelete(id) {
        deleteToDo(token, id);
    }

    function onComplete(id, completed) {
        saveToDo(token, { id, completed })
    }

    return (
        <Transition in={transition} timeout={0}>
            {state => (
                <ToDo todo={todo} onCompleted={onComplete} onDelete={onDelete} onChange={onChange} style={{...transitionStyles[state]}} />
            )}
        </Transition>
    )

};


const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveToDo: (token, todo) => dispatch(ToDoStore.editToDo(token, todo)),
        deleteToDo: (token, id) => dispatch(ToDoStore.deleteToDo(token, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);