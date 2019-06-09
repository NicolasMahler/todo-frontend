import React, {useState, useEffect} from 'react';
import ToDo from './ToDo/ToDo';
import { connect } from 'react-redux';
import ToDoStore from '../../store/ToDos/ToDoStore';

const ToDoList = ({getTodos, todos}) => {
    
    useEffect(() => {
        if (todos.length === 0) {
            getTodos(localStorage.getItem('token'));
        }
    });

    return (
        <React.Fragment>
            {todos.forEach(todo => (<ToDo todo={todo} />))};
        </React.Fragment>
    );

}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: (token) => dispatch(ToDoStore.getTodos(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);