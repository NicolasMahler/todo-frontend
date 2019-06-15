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

const ToDoContainer = ({todo, key}) => {

    function onChange(event) {
        console.log(event)
    }

    return (
        <React.Fragment>
            <ToDo key={key} todo={todo} onChange={onChange} />
        </React.Fragment>
    )

};


const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveToDo: (todo) => dispatch(ToDoStore.updateTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);